import "../css/home.css";
import Button from "@mui/material/Button";
import Navbar from "./navbar";
import Footer from "./Page/footer";
import React, { useState, useEffect } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

// import image
import backgroundImage from "./img/parallax.jpg";
import profile from "./img/ricky_profile.JPG";

const Home = () => {
  return (
    <>
      <div id="parallax" className="parallax-item">
        <Navbar />
        <div
          className="container-fluid"
          style={{ padding: "10rem", height: "37rem" }}
        >
          <div className="home">
            <h3>Hi, my name is</h3>
            <h1>
              <b>RICKY SUPRIYANTO</b>
            </h1>
            <h3>
              I'm interested in website development. Currently I'm focusing on
              as front and back-end developer
            </h3>
          </div>
          {/* <Button variant="contained" style={{backgroundColor:'#91D8E4'}}> */}
          <Button
            variant="outlined"
            href="/about"
            style={{ color: "#472183", borderColor: "#472183" }}
          >
            More Details
          </Button>
        </div>
      </div>
      <div className="paralax-item">
        <div
          className="container-fluid"
          style={{
            padding: "5rem",
            height: "37rem",
          }}
        >
          <div className="row">
            <div className="col-4 image-profile">
              <img
                src={profile}
                class="rounded-circle img-thumbnail shadow-lg"
                style={{ padding: 0 }}
                width={"350rem"}
                alt="Ricky Profile"
              />
            </div>
            <div className="col-8 desc-profile">
              <h1>About Me</h1>
              <h4>
                I am a programmer interested in the world of websites. I am a
                person who is able to organize, manage time, and have high
                curiosity about something. I can also work in any condition.
                Working with people in building websites is one of the things I
                love. Here are some skills that I have based on my experience:
              </h4>
              <div className="button-skills">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  HTMl{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  CSS{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  JavaScript{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  PHP{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Git{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  SQL{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  React{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Flask{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Laravel{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Wordpress{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Node Js{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Python{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Teamwork{" "}
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#472183",
                    margin: "0 1rem 1rem 0",
                  }}
                >
                  {" "}
                  Leadership{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
