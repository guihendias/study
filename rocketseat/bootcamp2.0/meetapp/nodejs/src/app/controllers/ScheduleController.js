import Meetup from '../models/Meetup';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const meetups = await Meetup.findAll({
      where: { user_id: req.userId },
      order: ['date'],
      include: [
        {
          model: User,
          as: 'organizer',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json(meetups);
  }
}

export default new ScheduleController();
