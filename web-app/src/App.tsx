import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Dashboard from './Views/Dashboard';
import AddUser from './Views/AddUser';
import GetUsers from './Views/GetUsers';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/getusers" element={<GetUsers />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
