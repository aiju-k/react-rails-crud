import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './Editor';
import './App.css';
import { ToastContainer } from 'react-toastify';


const App = () => (
  <>
    <ToastContainer />
    <Routes>
      <Route path="events/*" element={<Editor />} />
    </Routes>
  </>
);

export default App;
