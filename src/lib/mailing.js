import nodemailer from "nodemailer";
import ejs from "ejs";
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";
const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;
const Mailing = {};
const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);
const TEMPLATES = {
  contact: {
    fileName: "contact-mail-template.ejs",
    subject: "[My Portfolio] New contact message.",
    temp: `
<h3>Hi Nat, You have a new contact message from your portfolio</h3>
<hr>
<br />
<br />

<p><strong>NAME:</strong> <%= name %></p>
<p><strong>EMAIL:</strong> <%= email %></p>
<p><strong>MESSAGE:</strong> <%= message %></p>

<br />
<br />
<hr>
<p>From your portfolio website.</p>
    `,
  },
};
/**
 * Send Email
 */
Mailing.sendEmail = async (data) => {
  oauth2Client.setCredentials({
    scope: "https://www.googleapis.com/auth/gmail.send",
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });
  const accessToken = await oauth2Client.getAccessToken();
  // console.log(accessToken);

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587, // TLS (google requires this port for TLS)
    secure: false, // Not SSL
    requireTLS: true, // Uses STARTTLS command (nodemailer-ism)
    auth: {
      type: "OAuth2",
      scope: "https://www.googleapis.com/auth/gmail.send",
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  /* const filePath = join(
    appDir,
    "src",
    "lib",
    "templates",
    TEMPLATES[data.template].fileName
  ); */
  const currentTemplate = TEMPLATES[data.template].temp;

  const htmlContent = ejs.render(currentTemplate, data, {});
  // console.log(htmlContent);

  const mailOptions = {
    from: `${SENDER_EMAIL_ADDRESS}`,
    to: data.email,
    subject: TEMPLATES[data.template].subject,
    html: htmlContent,
  };

  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      return;
    }
    return info;
  });
};

export default Mailing;
