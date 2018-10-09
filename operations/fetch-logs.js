const fs = require('fs')

// In this case, data read from the fs, but it could also be a cached API result.
const data = fs.readFileSync('./data/logs/hotel-search_2018-09-09T12:21:29.857Z.json', 'utf8')
const parsedData = JSON.parse(data)

function getLogs () {
  console.log('Requested Item Data:', data)
  return parsedData;
}

module.exports = { getLogs }