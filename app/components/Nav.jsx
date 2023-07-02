"use client";
import { useState } from "react";
import Logo_nav from "./Logo_nav";
import Link from "next/link";
import 'bootstrap/dist/js/bootstrap';

import Signup from "./Signup";

const Nav = () => {
  const [state, setState] = useState("form");

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Logo_nav />
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb- mb2-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                aria-current="page"
                href="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <a className="nav-link text-light" href="#">
                About Us
              </a>
            </li>
            
            <li className="nav-item ">
              <a className="nav-link text-light" href="#">
                Contact US
              </a>
            </li>

            <li className="nav-item ">
              <Signup />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
