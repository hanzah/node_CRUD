module.exports = require('redis').createClient(process.env.REDIS || 'redis://localhost:6379');