import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return <>
    <nav
        className="navbar navbar-expand-sm position-sticky top-0 z-3"
    >
        <div className="container">
            <a className="navbar-brand fw-bolder fs-3 text-white" href="#">START REACT</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Menu
                <i class="fa-solid fa-bars m-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                        <NavLink className="nav-link fw-bolder my-4 p-3 fs-5" to="/">PORTFOLIO</NavLink>
                    </li>
                    <li className="nav-item mx-3 ">
                        <NavLink className="nav-link fw-bolder my-4 p-3 fs-5" to="/About">ABOUT</NavLink>
                    </li>
                    <li className="nav-item mx-3">
                        <NavLink className="nav-link fw-bolder my-4 p-3 fs-5" to="/Contact">CONTACT</NavLink>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
    </>
}
