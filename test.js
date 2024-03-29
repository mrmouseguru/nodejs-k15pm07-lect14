import { MongoClient } from "mongodb";

const main = async () =>{
    let conn = await MongoClient.connect("mongodb://localhost");
    let db =  conn.db("example");
    let myColl = db.collection("myCollection");
    let docs = await myColl.find({num : 193}).toArray();

    await myColl.insertOne({classCode : "K15pm07", year : 2024});

    console.log(docs);
};

main();