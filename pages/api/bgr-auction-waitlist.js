// cors
import Cors from "cors";

import dbConnect from "../../src/lib/dbConnect";
import BGRAuction from "../../src/models/BGRAuction";

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

async function bgrAuctionWaitlistHandler(req, res) {
  // run cors middleware
  await runMiddleware(req, res, cors);

  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const { email } = req.body;

      try {
        // save contact data to mongodb
        const bgrAuctionWaitlist = await BGRAuction.create({
          email,
        });

        // respond with a success response
        res.status(201).json({ success: true, data: bgrAuctionWaitlist });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}


export default bgrAuctionWaitlistHandler;