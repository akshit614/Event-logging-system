import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />

        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
