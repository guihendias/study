import { isBefore, isEqual } from 'date-fns';
import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import Subscription from '../models/Subscription';

import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async store(req, res) {
    const { id: meetup_id } = req.body;

    const meetup = await Meetup.findByPk(meetup_id, {
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['email', 'name'],
        },
      ],
    });

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    if (req.userId === meetup.user_id) {
      return res
        .status(400)
        .json({ error: 'You cant subscribe to meetups that you organize' });
    }

    if (isBefore(meetup.date, new Date())) {
      return res
        .status(400)
        .json({ error: 'You cant subscribe to meetups that already happened' });
    }

    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'date'],
          where: {
            [Op.or]: [
              {
                id: {
                  [Op.eq]: meetup_id,
                },
              },
              {
                date: {
                  [Op.eq]: meetup.date,
                },
              },
            ],
          },
        },
      ],
    });

    if (subscriptions.length > 0) {
      return res.status(400).json({
        error:
          'You already subscribed to this meetup or you have another at this time',
      });
    }

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id,
    });

    const user = await User.findByPk(req.userId);

    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(subscription);
  }

  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      order: [[{ model: Meetup, as: 'meetup' }, 'date', 'desc']],
      include: [
        {
          model: Meetup,
          as: 'meetup',
          attributes: ['id', 'title', 'description', 'location', 'date'],
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
        },
      ],
    });

    return res.json(subscriptions);
  }
}

export default new SubscriptionController();
