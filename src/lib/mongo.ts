import { MongoClient, ServerApiVersion } from "mongodb";

/**
 * Creates a new instance of MongoClient to connect to a MongoDB cluster.
 * @returns {MongoClient} A new instance of MongoClient.
 */
const createMongoClient = () => {
    // Get the MongoDB connection details from environment variables.
    const uri = process.env.MONGO_URI!;
    const username = process.env.MONGO_USERNAME!;
    const password = process.env.MONGO_PASSWORD!;

    

    // Replace placeholders in the connection string with actual credentials.
    const connectionString = uri.replace('<username>', username).replace('<password>', password);

    console.log({uri, username, password, connectionString});

    // Create a new instance of MongoClient with strict server API versioning.
    const mongoClient = new MongoClient(connectionString, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    return mongoClient;
}



export default createMongoClient