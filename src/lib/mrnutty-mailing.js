import nodemailer from "nodemailer";
import ejs from "ejs";
const {
  MRNUTTY_SENDER_EMAIL_ADDRESS,
  MRNUTTY_EMAIL_SERVICE_HOST,
  MRNUTTY_EMAIL_SERVICE,
  MRNUTTY_EMAIL_SERVICE_PORT,
  MRNUTTY_EMAIL_USER,
  MRNUTTY_EMAIL_PASSWORD,
} = process.env;
const Mailing = {};

const TEMPLATES = {
  contact: {
    fileName: "contact-mail-template.ejs",
    subject: "New contact message.",
    temp: `
<h3>Hi, You have a new contact message from https://mrnutty.co</h3>
<hr>
<br />
<br />

<p><strong>NAME:</strong> <%= name %></p>
<p><strong>EMAIL:</strong> <%= email %></p>
<p><strong>MESSAGE:</strong> <%= message %></p>

<br />
<br />
<hr>
<p>From your website.</p>
    `,
  },
};

/* Send Email */
Mailing.sendEmail = async (data) => {
  const smtpTransport = nodemailer.createTransport({
    service: MRNUTTY_EMAIL_SERVICE, // sendgrid
    host: MRNUTTY_EMAIL_SERVICE_HOST, // smtp.sendgrid.net
    port: MRNUTTY_EMAIL_SERVICE_PORT, // TLS (sendgrid requires this port for TLS)
    secure: false, // Not SSL
    auth: {
      user: MRNUTTY_EMAIL_USER,
      pass: MRNUTTY_EMAIL_PASSWORD,
    },
  });

  const currentTemplate = TEMPLATES["contact"].temp;

  const htmlContent = ejs.render(currentTemplate, data, {});

  const mailOptions = {
    from: `MrNutty <${MRNUTTY_SENDER_EMAIL_ADDRESS}>`,
    to: data.recipient,
    subject: TEMPLATES['contact'].subject,
    html: htmlContent,
  };

  await new Promise((resolve, reject) => {
    smtpTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
        // return;
      }

      // return info;
      resolve("mail sent");
    });
  });
};

export default Mailing;
