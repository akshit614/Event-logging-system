const { z } = require('zod');
const {  EventModel } = require('../models/eventLog');
const { generateHash } = require('../services/hashServices');

const inputSchema = z.object({
  eventType : z.string().min(1, "String cannot be empty"),
  sourceAppId : z.string().min(1, "String cannot be empty"),
  dataPayload : z.object()
})

exports.createLog = async (req, res) => {
  const {success} = inputSchema.safeParse(req.body)

  if (!success) {
    res.json({msg : "wrong input format given"})
  }
  const { eventType, sourceAppId, dataPayload } = req.body;

  try {
    const lastLog = await EventModel.findOne().sort({ _id: -1 });

    const prevHash = lastLog ? lastLog.hash : 'GENESIS';

    const newLog = {
      eventType,
      timestamp: new Date(),
      sourceAppId,
      dataPayload,
      prevHash,
    };
    newLog.hash = generateHash(newLog);

    const log = await EventModel.create(newLog)

    res.status(201).json({ message: 'Event logged successfully', log: log });
  } catch (error) {
    res.status(500).json({ error: `Error loggingg event ${error}` });
  }
};
