import dbConnect from "../../../utils/dbConnect";
import Tool from "../../../models/Toolregist";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "PATCH":
      try {
        const tools = await Tool.findByIdAndUpdate(
          {
            _id: req.query.ids,
          },
          { antall: req.body.antallSum }
        );

        res.status(200).json({ success: true, data: tools });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
