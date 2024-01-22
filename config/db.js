import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config()
const mongoURI = process.env.mongoURI


class Database {
    constructor(uri, dbName) {
        this.uri = uri;
        this.dbName = dbName;
        this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.client.connect()
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to the database');
        } catch (error) {
            console.error('Error connecting to the database:', error);
            throw error;
            return this.database
            
        }
    }

    async close() {
        await this.client.close();
        console.log('Connection to the database closed');
    }

    getCollection(collectionName) {
        return this.database.collection(collectionName);
    }
}


const dataBase = new Database(mongoURI,'mydata')
const db = dataBase.client.db('myProject')

export {db}