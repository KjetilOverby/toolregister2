import dbConnect from "../../../utils/dbConnect";
import Toolscreate from "../../../models/Toolscreate";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST":
      try {
        const toolcreate = new Toolscreate(req.body);
        toolcreate.save().then(() => {
          res.send(toolcreate);
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;
  }
};
