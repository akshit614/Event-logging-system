const {  EventModel } = require('../models/eventLog');

exports.queryLogs = async (req, res) => {
  const { startTime, endTime, eventType, sourceAppId, page = 1, limit = 10 } = req.query;

  try {
    const query = {};
    if (startTime && endTime) query.timestamp = { $gte: new Date(startTime), $lte: new Date(endTime) };
    if (eventType) query.eventType = eventType;
    if (sourceAppId) query.sourceAppId = sourceAppId;

    const logs = await EventModel.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Error querying logs' });
  }
};
