import React from "react";
import './Home.css';
import f8 from './images/f8.png';
import './Category.css';
import f13 from './images/f13.png';
import f16 from './images/f16.png';
import f12 from './images/f12.png';
import f11 from './images/f11.png';
import f15 from './images/f15.png';
import f17 from './images/f17.png';

function Category() {
    return (
        <container>
            <div className="categorySec">
                <div className="category">
                    <img src={f8} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>
                <div className="category">
                    <img src={f13} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>
                <div className="category">
                    <img src={f16} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>
                <div className="category">
                    <img src={f17} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>
                <div className="category">
                    <img src={f12} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>
                <div className="category">
                    <img src={f11} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>
                <div className="category">
                    <img src={f15} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>
                <div className="category">
                    <img src={f8} alt="" width="20%" height="410em" srcSet="" className="cat" />
                    <p className="Catname">South<br></br>Indian</p>
                </div>

            </div>
        </container>
    );
}

export default Category;