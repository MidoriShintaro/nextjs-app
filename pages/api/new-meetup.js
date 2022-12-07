import { MongoClient } from "mongodb";

async function handle(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://kirihito:satthu147@db.np7yt.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    const result = await meetupCollection.insertOne(data);

    client.close();
    res.status(201).json({
      message: "success",
      result,
    });
  }
}

export default handle;
