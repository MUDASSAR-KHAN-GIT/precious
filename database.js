const { MongoClient } = require('mongodb')

let client = null
let db = null

async function connectDB() {
  if (db) return db
  client = new MongoClient(process.env.MONGODB_URI)
  await client.connect()
  db = client.db('precious_md')
  console.log('[DB] MongoDB connected')
  return db
}

function getDB() { return db }

module.exports = { connectDB, getDB }