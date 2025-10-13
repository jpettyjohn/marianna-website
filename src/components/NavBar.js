import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

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
                <Dropdown className="custom-dropdown">
                    <Dropdown.Toggle variant="dark" className="navlink">
                        Research
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={NavLink} to="/structures">
                            Structures
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/materials">
                            Materials
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
                <NavLink
                    to="/hobbies"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Hobbies
                </NavLink>
                <NavLink
                    to="/titles"
                    className="inactive navlink"
                    activeClassName="active"
                >
                    Titles
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
