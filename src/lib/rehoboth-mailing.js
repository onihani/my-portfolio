// core
const fs = require("fs");
const path = require("path");
// imports
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const ejs = require("ejs");

// env variables
const {
  REHOBOTH_MAILGUN_API_KEY,
  REHOBOTH_MAILGUN_DOMAIN,
  REHOBOTH_CONTACT_MAIL,
} = process.env;

// getting email template
const contactEmailTemplateSource = fs.readFileSync(
  path.join(
    require("path").resolve("./"),
    "src",
    "lib",
    "templates",
    "rehoboth-contact-template.ejs"
  ),
  "utf8"
);
const contactResponseEmailTemplateSource = fs.readFileSync(
  path.join(
    require("path").resolve("./"),
    "src",
    "lib",
    "templates",
    "rehoboth-contact-response-template.ejs"
  ),
  "utf8"
);

// templates object
const rawEmailTemplates = {
  contact: contactEmailTemplateSource,
  "contact-response": contactResponseEmailTemplateSource,
};

// mail gun config
const mailgunAuth = {
  auth: {
    api_key: REHOBOTH_MAILGUN_API_KEY,
    domain: REHOBOTH_MAILGUN_DOMAIN,
    // host: "api.eu.mailgun.net",
  },
};

// Mailing
const Mailing = {
  sendEmail: async (data = {}, emailTemplate = "contact", options = {}) => {
    const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));
    console.log(emailTemplate);

    const template = ejs.compile(rawEmailTemplates[emailTemplate]);

    const htmlToSend = template(data, options);

    const mailOptions = {
      from: REHOBOTH_CONTACT_MAIL,
      to: data?.recipient || REHOBOTH_CONTACT_MAIL,
      subject: data.subject,
      html: htmlToSend,
    };

    await new Promise((resolve, reject) => {
      smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  },
};

export default Mailing;
