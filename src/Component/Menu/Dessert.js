import React from "react";
import f8 from "./images/f8.png";
import './Menu.css';

function Dessert() {
    return (
        <container className="South">
            <div className="menuTitle" >
                <p id="menuName">Dessert</p><img src={f8} className="mainImgMenu" alt="" width="120rem" height="70rem" /><hr></hr>
            </div>
            <div className="AllMenu">
                <div className="menu">

                    <img src={f8} alt="" width="150rem" height="90rem" className="menuImg" />
                    <div className="MenuBack"><p className="menuSeprateTitle">Idli Sambar</p><p id="price"> &#x20B9; 50</p></div>
                </div>
                <div className="menu">

                    <img src={f8} alt="" width="150rem" height="90rem" className="menuImg" />
                    <div className="MenuBack"><p className="menuSeprateTitle">Idli Sambar</p><p id="price"> &#x20B9; 50</p></div>
                </div>
                <div className="menu">

                    <img src={f8} alt="" width="150rem" height="90rem" className="menuImg" />
                    <div className="MenuBack"><p className="menuSeprateTitle">Idli Sambar</p><p id="price"> &#x20B9; 50</p></div>
                </div>
                <div className="menu">

                    <img src={f8} alt="" width="150rem" height="90rem" className="menuImg" />
                    <div className="MenuBack"><p className="menuSeprateTitle">Idli Sambar</p><p id="price"> &#x20B9; 50</p></div>
                </div>
                <div className="menu">

                    <img src={f8} alt="" width="150rem" height="90rem" className="menuImg" />
                    <div className="MenuBack"><p className="menuSeprateTitle">Idli Sambar</p><p id="price"> &#x20B9; 50</p></div>
                </div>
            </div>
        </container >
    );
}

export default Dessert;