import React from "react";
import f9 from "./images/f9.png"
import './Footer.css';

function Footer() {
    return (
        <container className="Footer">
            <div className="foot"></div>
            <div >
                <img src={f9} alt="" width="160em" height="160em" srcset="" className="footlogo" />
            </div>

        </container>
    );
}

export default Footer;