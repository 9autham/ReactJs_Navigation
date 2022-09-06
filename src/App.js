import "./styles.css";

import React from "react";
import { Route, Routes, Link, NavLink, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Contactus from "./components/Contactus";
import Technologies from "./components/Technologies";
import Javascript from "./components/Javascrpt";
import HTML from "./components/HTML";
import Products from "./components/Products";
export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admirer❤️
          </a>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item nav">
                <NavLink className="nav-link active" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="users">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="contactus">
                  Contactus
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="technologies">
                  Technologies
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="products" element={<Products />} />
        <Route path="technologies" element={<Technologies />}>
          <Route path="html" element={<HTML />} />
          <Route path="" element={<Navigate replace to="html" />} />
          <Route path="javascript" element={<Javascript />} />
        </Route>
      </Routes>
    </div>
  );
}
