/* eslint-disable react/prop-types */

const LogChain = ({ logs }) => {
  return (
    <div className="flex flex-col items-center">
      {logs.map((log, index) => (
        <div
          key={log.hash}
          className="bg-gray-100 shadow-md rounded-lg p-4 my-2 w-3/4"
        >
          <p className="font-bold"><strong>Event Type: </strong>{log.eventType}</p>
          <p><strong>Source App: </strong>{log.sourceAppId}</p>
          <p><strong>Hash: </strong>
            <span className="break-all overflow-hidden text-sm md:text-base">
            {log.hash}
            </span></p>
          <p><strong>Previous Hash: </strong>
            <span className="break-all overflow-hidden text-sm md:text-base">
              {log.prevHash}
            </span>
          </p>
          {index < logs.length - 1 && (
            <div className="text-center text-gray-600 mt-2">↓</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LogChain
