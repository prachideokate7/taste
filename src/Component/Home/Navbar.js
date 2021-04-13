import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    return (
        <container className="Nav">
            <div classsName="Navbar">
                <NavLink to="/" className="a">home</NavLink>
                <NavLink to="/" className="a">Menu</NavLink>
                <Link activeClass="active" to="about-anchor" className="a" spy={true} smooth={true}>About Us</Link>
                <NavLink to="/Bookings" className="a">Bookings</NavLink>
                <Link activeClass="active" to="map" className="a" spy={true} smooth={true}>Find Us</Link>
                <NavLink to="/" className="a">Payment</NavLink>
            </div>

        </container>

    );
}

export default Navbar;