import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./auth/login";
import Dashboard from "./components/dashboard/index";
import Users from './components/users/index';

function App() {
  return (
    <React.StrictMode>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Routes>
    </React.StrictMode>
    );
}

export default App;
