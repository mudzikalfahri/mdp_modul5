import data from "../../../app/data.json";

export default async (req, res) => {
  const { ...query } = req.query;
  const filtered = data.filter((item) => {
    return Object.keys(query).every((key) => {
      return String(item[key]).toLowerCase().includes(query[key].toLowerCase());
    });
  });
  res.status(200).json(filtered);
};
