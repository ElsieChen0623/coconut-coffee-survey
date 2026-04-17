'use strict';

const { MongoClient } = require('mongodb');

const url = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
const dbName = 'your_database_name'; // Replace with your database name

let db = null;

const connectDB = async () => {
    if (db) return db;
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    db = client.db(dbName);
    return db;
};

module.exports = { connectDB };