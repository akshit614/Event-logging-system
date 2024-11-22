const {  EventModel } = require('../models/eventLog');
const { generateHash } = require('../services/hashServices');

exports.createLog = async (req, res) => {
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
    // const hash = generateHash({ eventType, sourceAppId, dataPayload, prevHash });

    // await EventModel.create({ 
    //   eventType, 
    //   timestamp : new Date(),
    //   sourceAppId, 
    //   dataPayload, 
    //   hash, 
    //   prevHash 
    // });

    res.status(201).json({ message: 'Event logged successfully', log: log });
  } catch (error) {
    res.status(500).json({ error: `Error loggingg event ${error}` });
  }
};
