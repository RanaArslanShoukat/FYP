import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import User from "./User";
import Post from "./Post";
import Logout from "./Logout";
import Signin from "./Signin";
import { auth } from "./firebase";
export class App extends Component {
  render() {
    return (
      <>
        {/* {auth.currentUser!=null && <Navbar />} */}
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/User" element={<User />} />
          <Route exact path="/Post" element={<Post />} />
          <Route exact path="/Home" element={<Logout />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </>
    );
  }
}

export default App;
