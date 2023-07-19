import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryCover from './GalleryCover';
import SystemDetails from './systemDetails';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/gallery" element={<GalleryCover/>} />
      <Route path="/system" element={<SystemDetails/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
