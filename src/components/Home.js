import React from "react";
import { Navbar } from "react-bootstrap";
import Image from "react-bootstrap";

function Home() {
  return (
    <div>
      {/*<Navbar />*/}
      <nav
        class="navbar navbar-expand-lg bg-secondary-subtle p-2 text-black bg-white"
        style={{ color: "white" }}
      >
        <div class="container-fluid  ">
          <a class="navbar-brand w-25 p-2 font-weight-bold" href="/">
            SUHANIZILLA
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse float-right "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active float-right "
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right " href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right " href="/">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right " href="/">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right " href="/">
                  Work
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right " href="/">
                  Experince
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link float-right " href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        style={{
          border: "1 solid red",
          display: "flex",
          flexDirection: "row",

          color: "white",
        }}
      >
        <img
          src="https://img.freepik.com/free-photo/black-texture_1249-133.jpg"
          style={{ width: "50%", height: "400px" }}
          class="img-fluid"
          alt="..."
        />
        <div
          className="centered"
          style={{
            width: "50%",
            height: "400px",
          }}
        >
          <h6 class="display-6 text-white p-0  ">Hi there</h6>
          <h6 class="display-6 text-white p-0  ">I 'am Suhani</h6>
          <h6 class="display-6 text-white p-0   ">I am into web developer</h6>
          <button type="button" class="btn btn-light text-center">
            About me
          </button>
        </div>
        <div
          style={{
            width: "50%",
            height: "400px",
          }}
        >
          <img src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png" />
        </div>
        <div>
          <h6 class="display-6 text-white p-0  ">Hi there</h6>
          <h6 class="display-6 text-white p-0  ">I 'am Suhani</h6>
          <h6 class="display-6 text-white p-0   ">I am into web developer</h6>
          <button type="button" class="btn btn-light text-center">
            About me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
