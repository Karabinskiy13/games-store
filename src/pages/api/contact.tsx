/* eslint-disable @typescript-eslint/no-var-requires */
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: any, res: any) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: `${body.email}`,
    from: 'ivan.karabinskiy1308@gmail.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />')
  };

  await mail.send(data).then(() => {
    console.log('Email sent');
  });
  console.log(data);

  res.status(200).json({ status: 'OK' });
};
