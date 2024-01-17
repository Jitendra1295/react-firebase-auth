import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
function App() {
  const [userName, setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
