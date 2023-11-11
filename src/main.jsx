import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import SigninPage from './pages/SigninPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index="/" element={<App/>}></Route>
      <Route path="/signin" element={<SigninPage/>}></Route>
      <Route path="/getStarted" element={<SignupPage/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
