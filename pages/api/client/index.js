import dbConnect from "../../../utils/mongodbConnect";
import Client from "../../../models/client";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const clients = await Client.find({});
        // const clients = await Client.create({name:'test', email:'123'});
        res.status(200).json({ succes: true, data: clients });
      } catch (e) {
        res.status(400).json({ succes: false, message: e });
      }
      break;
    default:
      return res.status(200).json({ succes: true, message: 'default' });
  }
};
