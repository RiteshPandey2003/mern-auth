import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import About from './component/About'
import Profile from './component/Profile'
import SignIn from "./component/SignIn"
import SignUp from './component/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
