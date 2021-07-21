import React from "react";
import "./bookings.css";
import place from "./images/f18.png";
import grab from "./images/f19.png";
import { Link } from 'react-router-dom';

function Bookings() {
    return (

        <div class="container">
            <img className="table" src={grab} alt="grab" />
            <Link to="/Table">
                <button className="btn">Reserve your table!</button>
            </Link>
            <img className="table" src={place} alt="grab" />
            <Link to="/Order">
                <button className="btnn">PLACE YOUR ORDER!</button>
            </Link>
        </div>
    );
}

export default Bookings;
