import React from "react";
import Category from "./Category";
import './Home.css';
import f10 from "./images/f10.png";
import About from "./About"
import Contact from "./Contact"
import Location from "./Location";
import Footer from './Footer/Footer';

function Home() {
    return (
        <container>
            <div >
                <img src={f10} alt="" width="100%" className="homeimg" />

                <figure >
                    <div >
                        <figCaption>
                            Taste Corner
                        </figCaption>
                    </div>
                </figure>
            </div>
            <div>
                <Category />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Location />
            </div><Footer />
        </container>

    );
}

export default Home;