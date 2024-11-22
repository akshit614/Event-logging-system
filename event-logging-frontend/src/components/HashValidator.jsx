
const HashValidator = ({ logs }) => {
  const findInconsistencies = () => {
    const inconsistencies = [];
    for (let i = 1; i < logs.length; i++) {
      if (logs[i].prevHash !== logs[i - 1].hash) {
        inconsistencies.push(logs[i]);
      }
    }
    return inconsistencies;
  };

  const inconsistencies = findInconsistencies()

  return (
    <div className="mt-6 p-4 bg-gray-50 shadow-md rounded-lg">
      {inconsistencies.length === 0 ? (
        <p className="text-green-600 font-bold">All hashes are consistent.</p>
      ) : (
        <div className="text-red-600">
          <h3 className="font-bold mb-2">Inconsistencies Detected:</h3>
          {inconsistencies.map((log, index) => (
            <div key={index} className="mb-4">
              <p>
                <strong>Hash:</strong> {log.hash}
              </p>
              <p>
                <strong>Expected Prev Hash:</strong> {logs[index - 1]?.hash || 'N/A'}
              </p>
              <hr className="my-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HashValidator
