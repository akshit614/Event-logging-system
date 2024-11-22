const crypto = require('crypto');

function generateHash(log) {
  const logString = `${log.eventType}${log.timestamp}${log.sourceAppId}${JSON.stringify(log.dataPayload)}${log.prevHash}`;
  
  return crypto.createHash('sha256').update(logString).digest('hex');
}

module.exports = { generateHash };
