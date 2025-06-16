import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div class="navbar-main">
            {/* <div className='navbar-logo-container'>
                <img class="navbar-logo" src={Image} alt="This is me"></img>
            </div> */}
            <div class="navbar-name">
                <h3>Marianna Polak</h3>
            </div>
            <div class="navlink-container">
                <NavLink
                    to="/"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Main
                </NavLink>
                <NavLink
                    to="/research"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Research Projects
                </NavLink>
                <NavLink
                    to="/publications"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Publications
                </NavLink>
                <NavLink
                    to="/teaching"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Teaching
                </NavLink>
                <NavLink
                    to="/team"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Team
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
