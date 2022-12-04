import data from "../../../../app/data.json";
import NextCors from "nextjs-cors";
export default async (req, res) => {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { category } = req.query;

  const item = data.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  res.status(200).json(item);
};
