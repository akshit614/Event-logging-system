# Event Logging system
- Backend system that provides a decentralized, tamper-proof event logging platform for distributed applications.

## Features
- Event Logging API to get and post logs of varous actions with details
-  Hashing for Store event logs in a tamper-proof way.
-  MongoDb database for scalable and stable database.
-  Dashboard with table view of logs with previous and current hashes.
-  Zod validations for input schemas.

# Tech stack
## Backend
- Node.js with Express.js
- MongoDB
- Hashing with SHA-256 for tamper-proof logs
- Zod library for schema validation

## Frontend 
- React.js with Tailwind CSS

# Routes 
1. **Post** `api/log` 
    - To create a new log with input like 
    - Below is an example of an event log:

```json
{
  "eventType": "Purchase/login/logout/transfer/anyaction",
  "sourceAppId": "example app",
  "dataPayload": { "username": "abc", "status": "success/pending/fail/any" }
}
```

2. **Get** `api/logs`
    - To get all the logs of the system
