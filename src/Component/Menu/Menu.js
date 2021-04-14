import React from "react";
import South from "./South";
import Beverage from './Beverage';
import Starter from './Starter';
import North from './North';
import Chianese from './Chianese';
import Dessert from './Dessert';
import Nonveg from './Nonveg';
import Speciality from './Speciality';
import Street from './Starter';
import Marathi from './Marathi';

function Menu() {
    return (<container>
        <div >
            <Starter />
            <South />
            <North />
            <Chianese />
            <Marathi />
            <Beverage />
            <Dessert />
            <Street />
            <Nonveg />
            <Speciality />
        </div>
    </container>);
}

export default Menu;