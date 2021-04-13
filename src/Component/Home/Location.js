import React from "react";
import f18 from "./images/f18.png"
import './Location.css'

function Location() {
    return (
        <container>
            <div className="mapimg">
                <img src={f18} alt="" width="100%" height="600rem" />
            </div>

        </container>
    );
}

export default Location;