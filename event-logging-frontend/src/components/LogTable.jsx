
const LogTable = ({ logs }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Event Type</th>
            <th className="border border-gray-300 px-4 py-2">Source App</th>
            <th className="border border-gray-300 px-4 py-2">Timestamp</th>
            <th className="border border-gray-300 px-4 py-2">Hash</th>
            <th className="border border-gray-300 px-4 py-2">Previous Hash</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.hash} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{log.eventType}</td>
              <td className="border border-gray-300 px-4 py-2">{log.sourceAppId}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(log.timestamp).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">{log.hash}</td>
              <td className="border border-gray-300 px-4 py-2">{log.prevHash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogTable
