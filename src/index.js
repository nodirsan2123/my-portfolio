import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Tecnology from './pages/Tecnology';
import Myself from './pages/Myself';
import Projects from './pages/Projects';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<App />}>
        <Route path='/' element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/tecnology' element={<Tecnology />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/myself' element={<Myself />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
