import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div class="navbar-main">
            {/* <div className='navbar-logo-container'>
                <img class="navbar-logo" src={Image} alt="This is me"></img>
            </div> */}
            <div class="navbar-name">Marianna Polak</div>
            <div class="navlink-container">
                <NavLink
                    to="/"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Main
                </NavLink>
                <NavLink
                    to="/publications"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Publications
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
