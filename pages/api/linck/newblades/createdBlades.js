import dbConnect from "../../../../utils/dbConnect";
import NewBlades from "../../../../models/NewBlades";

dbConnect();

const currentYear = new Date().getFullYear();
// const currentMonth = new Date().getMonth() + 1;

export default async (req, res) => {
  const { method } = req;
  const date = new Date();
  const lastDay = new Date(date.getFullYear(), req.query.month, 0);
  switch (method) {
    case "GET":
      try {
        const newblades = await NewBlades.aggregate([
          {
            $match: {
              updated: {
                $gte: new Date(`${currentYear}-${req.query.month}-01`),
                $lte: new Date(
                  `${currentYear}-${req.query.month}-${lastDay.getDate()}`
                ),
              },
            },
          },
        ]);

        res.status(200).json({ success: true, data: newblades });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
