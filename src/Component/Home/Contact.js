import React from "react";
import './Contact.css';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function About() {
    return (
        <container>
            <div className="contact">
                <p className="contactTitle">
                    Contact Us
                </p>
                <div>
                    <div className="address">
                        <p id="addTitle">Taste Corner Restaurant</p><p id="infoadd">
                            <p><span class="material-icons md-48"><PhoneIcon /></span> 8208234433/8208234433</p>
                            <p><MailIcon />  aswadrestaurant@gmail.com</p>
                            <p><LocationOnIcon />  College road, Vidyanagar, Karad</p>
                        </p>
                    </div>
                </div>
                <div>

                    <div className="open">
                        <p id="addTitle">opening & Closing Time</p>
                        <p id="addopen">24 hours open</p>
                        <p id="addopenpara">You can book and place delivery any time
we are always there for you and your hunger</p>
                    </div>
                </div>
                <p className="locationTitle">
                    Find Us
                </p>
            </div>
        </container>
    );
}

export default About;