// cors
import Cors from "cors";

// mailing
import Mailing from "../../src/lib/mrnutty-mailing";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "POST", "HEAD"],
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
      const { name, email, message } = req.body;

      try {
        // send email to mr nutty
        await Mailing.sendEmail({
          template: "contact",
          email,
          name,
          message,
          recipient: "adobeap.dankyi@gmail.com", // mr.nutty.peanut@gmail.com
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