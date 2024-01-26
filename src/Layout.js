import React from 'react';
import "./Layout.css";
import {Outlet,Link} from "react-router-dom"

export default function Layout() {
  return (
    <div>
        <nav>
            <ul className='nav-bar'>
                <li>
                    <Link className="navlink" to="/">
                      Home
                    </Link>
                </li>
                <li>
                    <Link className="navlink" to="/About">
                    About
                    </Link>
                </li>
                <li>
                    <Link className="navlink" to="/Contact">
                    Counter
                    </Link>
                </li>
                <li>
                  <Link className='navliink' to="/Useeffect">
                    useefect
                  </Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}