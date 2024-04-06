import { useState } from "react";
import "./App.css";
import iconLogo from "./assets/Icon (1).png";
import imageLogo from "./assets/image.png";
import happyLogo from "./assets/happy.svg";
import influencer from "./assets/influencer.svg";
import kid from "./assets/kid.svg";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";
import youtube from "./assets/youtube.png";

function App() {
  return (
    <>
      <header>
        <div class="container">
          <div className="head-wrapper d-flex justify-content-between">
            <nav className="navbar">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link bg-transparent" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link bg-transparent" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link bg-transparent" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <p className="land fs-1 fw-bold">Landing</p>
            <p>
              <button className="btn text-white bg-primary fw-bold mt-3">
                Buy Now
              </button>
            </p>
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ height: "600px" }}
          >
            <div className="main-context">
              <p className="fs-1 text-black fw-bold w-50">
                Introduce Your Product Quickly & Effectively
              </p>
              <p className="fs-6 text-black w-50">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <button
                type="button"
                className="mt-5 btn text-white bg-primary btn-outline-primary"
              >
                Purchase UI kit
              </button>
              <button
                type="button"
                className="mt-5 btn bg-transparent btn-outline-primary"
              >
                Purchase UI kit
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <div className="row">
              <p className="fs-1 fw-bold text-black">Light, Fast & Powerful</p>
              <p className="fs-6 text-primary">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-6" style={{ height: "138px;" }}>
                <img src={iconLogo} className="mb-3" />
                <p className="fs-4 text-black fw-bold">Title Goes Here</p>
                <p className="fs-6 text-secondary">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="col-6" style={{ height: "138px;" }}>
                <img src={iconLogo} className="mb-3" />
                <p className="fs-4 text-black fw-bold">Title Goes Here</p>
                <p className="fs-6 text-secondary">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={imageLogo} />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <img src={happyLogo} />
          </div>
          <div className="col-6">
            <p className="fs-1 fw-bold text-black">Light, Fast & Powerful</p>
            <p className="context-two fs-6 text-primary w-75">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <img src={influencer} />
          </div>
          <div className="col-6">
            <p className="fs-1 fw-bold text-black">Light, Fast & Powerful</p>
            <p className="fs-6 text-primary w-75">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-6">
            <img src={kid} />
          </div>
          <div className="col-6">
            <p className="fs-1 text-black fw-bold">Light, Fast & Powerful</p>
            <p className="fs-6 text-primary w-75">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
        </div>
      </div>

      <div className="banner mt-5">
        <div className="align-box d-flex flex-column align-items-center">
          <p className="fs-1 fw-bold text-black ">A Price To Suit Everyone</p>
          <p className="final fs-6 text-primary mt-3 w-50 text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="fs-1 text-primary mt-1">$40</p>
          <p class="fs-6 text-primary">UI Design Kit</p>
          <p className="fs-6 text-primary mt-5">See, One price. Simple.</p>
          <button className="btn fs-5 btn-primary text-white mt-1">
            Purchase Now
          </button>
        </div>
      </div>

      <div className="footer mt-3" style={{ background: "#E7ECFF;" }}>
        <div className="d-flex justify-content-between align-items-center p-3">
          <p className="fs-6 text-secondary">©2023 Yourcompany</p>
          <p className="fs-1 fw-bold text-primary">Landing</p>
          <button className="btn text-white bg-primary row-2 fw-bold">
            Purchase Now
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d- d-flex" style={{ gap: "30px;" }}>
            <p className="fs-6 text-secondary">Home</p>
            <p className="fs-6 text-secondary">About</p>
            <p className="fs-6 text-secondary">Contact</p>
          </div>
          <div className="d-flex" style={{ gap: "30px;" }}>
            <img src={youtube} />
            <img src={insta} />
            <img src={facebook} />
            <img src={twitter} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
