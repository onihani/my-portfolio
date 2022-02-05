import Mailing from "../../src/lib/mailing";
import dbConnect from "../../src/lib/dbConnect";
import ContactMessage from "../../src/models/ContactMessage";

async function mailContactMessageHandler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const { name, email, message } = req.body;

      try {
        // save contact data to mongodb
        const contactMessage = await ContactMessage.create({
          name,
          email,
          message,
        });

        // respond with a success response
        res.status(201).json({ success: true, data: contactMessage });

        // send email to myself
        try {
          Mailing.sendEmail({ template: "contact", email, name, message });
          // console.log("Sending email");
        } catch (e) {
          console.error(e);
        }
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
