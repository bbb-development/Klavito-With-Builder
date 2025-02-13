import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import NewFlow from './pages/NewFlow';
import BrowseTemplates from './pages/BrowseTemplates';
import ViewReports from './pages/ViewReports';
import Settings from './pages/Settings';
import Builder from './pages/Builder';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/new-flow" element={<NewFlow />} />
      <Route path="/templates" element={<BrowseTemplates />} />
      <Route path="/builder" element={<Builder />} />
      <Route path="/reports" element={<ViewReports />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;