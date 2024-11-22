import { useEffect, useState } from 'react'
import { fetchLogs } from '../api/apiService'
import LogChain from '../components/LogChain'
import LogTable from '../components/LogTable'
import HashValidator from '../components/HashValidator'

const Dashboard = () => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLogs()
      setLogs(data)
    }
    fetchData()
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Event Logs Dashboard</h1>
      <LogChain logs={logs} />
      <LogTable logs={logs} />
      <HashValidator logs={logs} />
    </div>
  );
};

export default Dashboard
