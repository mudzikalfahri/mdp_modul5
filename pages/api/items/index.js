import data from "../../../app/data.json";
import NextCors from "nextjs-cors";

export default async (req, res) => {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  const { ...query } = req.query;
  const filtered = data.filter((item) => {
    return Object.keys(query).every((key) => {
      return String(item[key]).toLowerCase().includes(query[key].toLowerCase());
    });
  });
  res.status(200).json(filtered);
};
