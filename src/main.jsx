import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { HelmetProvider } from "react-helmet-async";
// import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById('root')).render(<StrictMode>
  <HelmetProvider>
    {/* <BrowserRouter>
      <Routes location="/">
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter> */}
    <App/>
  </HelmetProvider>
</StrictMode>);
