// cors
import Cors from "cors";

// lib
import Mailing from "@lib/rehoboth-mailing";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "POST", "HEAD"],
  origin: "*",
  optionsSuccessStatus: 200,
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function newContactMessageHandler(req, res) {
  // run cors middleware
  await runMiddleware(req, res, cors);

  const { method } = req;

  switch (method) {
    case "POST":
      const { name, email, subject, message } = req.body;

      try {
        // send email to rehoboth
        await Mailing.sendEmail(
          {
            email,
            name,
            subject,
            message,
          },
          "contact"
        );

        // send email to contact person
        await Mailing.sendEmail(
          {
            email,
            name,
            subject: "Contact message received",
            message,
            recipient: email,
          },
          "contact-response"
        ).catch((err) => {
          console.log(err);
        });

        // respond with a success response
        res.status(201).json({ success: true, data: { name, email, message } });
      } catch (error) {
        res.status(500).json({ success: false });
      }

      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default newContactMessageHandler;
