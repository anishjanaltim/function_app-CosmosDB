
require('dotenv').config();

const endpoint = process.env.ENDPOINT;
const key = process.env.KEY;
const databaseId = process.env.DATABASE_ID;
const containerId = process.env.CONTAINER_ID;

module.exports = { endpoint, key, databaseId, containerId };
