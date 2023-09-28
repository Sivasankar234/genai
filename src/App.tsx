import React from 'react';
import './App.css';
import LogIn from './components/LogIn';
import WelcomePage from './components/WelcomePage';
// import ChatPage from './components/ChatPage';

import { BrowserRouter , Route, Routes } from  "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter >
      <Routes>
        <Route path="/" element={<LogIn/>}/> 
        <Route path="/welcomepage" element={<WelcomePage />}/> 
        {/* <Route path="/chatpage" element={<ChatPage />}/>  */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
