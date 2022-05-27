// cors
import Cors from 'cors'

import Mailing from "../../src/lib/mailing";
import dbConnect from "../../src/lib/dbConnect";
import ContactMessage from "../../src/models/ContactMessage";


// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function mailContactMessageHandler(req, res) {
  // run cors middleware
  await runMiddleware(req, res, cors)

  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const { name, email, message, recipient, template } = req.body;

      try {
        // save contact data to mongodb
        const contactMessage = await ContactMessage.create({
          name,
          email,
          message,
        });

        // send email to myself
        await Mailing.sendEmail({
          template: template ? template : "contact",
          email,
          name,
          message,
          recipient: recipient ? recipient : "n.bongo40@gmail.com",
        });

        // respond with a success response
        res.status(201).json({ success: true, data: contactMessage });

        // send email to myself
        /* try {
          // console.log("Sending email");
        } catch (e) {
          console.error(e);
        } */
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default mailContactMessageHandler;
