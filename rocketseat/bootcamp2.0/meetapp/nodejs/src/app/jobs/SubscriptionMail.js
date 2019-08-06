import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, user } = data;

    console.log(data);

    const formattedDate = format(
      parseISO(meetup.date),
      "dd 'de' MMMM', às' H:mm",
      {
        locale: pt,
      }
    );

    console.log(formattedDate);

    const res = await Mail.sendMail({
      to: `${meetup.organizer.name} <${meetup.organizer.email}>`,
      subject: `Nova inscrição em ${meetup.title}`,
      template: 'subscription',
      context: {
        organizer: meetup.organizer.name,
        user: user.name,
        email: user.email,
        date: formattedDate,
      },
    });
    console.log(res);
  }
}

export default new SubscriptionMail();
