// cors
import Cors from "cors";
import GhostAdminAPI from "@tryghost/admin-api";

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

async function soccersmWaitlistHandler(req, res) {
  // run cors middleware
  await runMiddleware(req, res, cors);

  const { method } = req;

  switch (method) {
    case "POST":
      const { email } = req.body;

      try {
        // The admin API client is the easiest way to use the API

        // Configure the client
        const api = new GhostAdminAPI({
          url: process.env.SOCCESSM_GHOST_URL,
          // Admin API key goes here
          key: process.env.SOCCESSM_GHOST_STAFF_ACCESS_TOKEN,
          version: "v3",
        });

        // add email to waitlist / member to member list
        await api.members.add({ email, note: "soccersm waitlist" })

        // respond with a success response
        res.status(201).json({ success: true, data: { email } });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

export default soccersmWaitlistHandler;
