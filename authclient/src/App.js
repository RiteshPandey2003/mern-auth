import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Profile from "./component/Profile";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import Header from "./maincomponent/Header";
import PrivateRoute from "./maincomponent/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
