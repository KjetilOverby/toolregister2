import dbConnect from "../../../utils/dbConnect";
import Toolswaste from "../../../models/Toolswaste";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const toolwaste = new Toolswaste(req.body);
        toolwaste.save().then(() => {
          res.send(toolwaste);
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;
  }
};
