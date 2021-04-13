import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <container className="Nav">
            <div classsName="Navbar">
                <NavLink to="/" className="a">home</NavLink>
                <NavLink to="/" className="a">Menu</NavLink>
                <NavLink to="/" className="a">About Us</NavLink>
                <NavLink to="/" className="a">Bookings</NavLink>
                <NavLink to="/" className="a">Find Us</NavLink>
                <NavLink to="/" className="a">Payment</NavLink>
            </div>

        </container>

    );
}

export default Navbar;