import nodemailer from "nodemailer";

export const sendEmail = async ({ email, name, message }: { email: string; name?: string; message?: string }) => {
  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: "shubham.thakur436@gmail.com",
      to: email,
      subject: `Hi ${name}, email recieved from Shubham`,
      html: `<p>${message}</p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
