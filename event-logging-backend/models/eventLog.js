const mongoose = require('mongoose');

const eventLogSchema = new mongoose.Schema({
  eventType: { type: String, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
  sourceAppId: { type: String, required: true },
  dataPayload: { type: Object, required: true },
  hash: { type: String, required: true }, // Current log's hash
  prevHash: { type: String, required: true }, // Previous log's hash
});

eventLogSchema.index({ timestamp: 1 });
eventLogSchema.index({ eventType: 1 });

const EventModel = new mongoose.model('EventLog', eventLogSchema);

module.exports = { EventModel }
