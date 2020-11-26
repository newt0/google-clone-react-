import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from "./Search";
import AppsIcon from "@material-ui/icons/Apps";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>

      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
};

export default Home;