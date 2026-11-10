// Throwaway file to check for successful MongoDB connection

const { MongoClient } = require('mongodb');

const url = "mongodb+srv://pritikaguglani20_db_user:1Zy8ONNB32zCtrvj@yield-curve-cluster.2dtcpza.mongodb.net"
const client = new MongoClient(url);

async function run(){
    try {
        console.log("Connecting to Mongo DB");
        await client.connect;

        const result = await client.db("admin").command({ ping: 1});
        console.log("Ping Successful", result);
    }
    catch(error) {
        console.log("Connection Failed", error);
    }
    finally {
        await client.close();
    }
}

run();