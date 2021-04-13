import React from "react";
import f8 from './images/f8.png'

import { NavLink } from 'react-router-dom';

function Bookings() {
    return (
        <container>
            <div>
                <NavLink to="/Table" ><img src={f8} alt="" width="20%" height="410em" /></NavLink>
            </div>
            <div>
                <NavLink to="/Order" ><img src={f8} alt="" width="20%" height="410em" /></NavLink>
            </div>

        </container>);
}

export default Bookings;