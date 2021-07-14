import React from 'react';
import Dcotor from '../../../images/5790-removebg.png'

const Doctors = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={Dcotor} alt="" />
            <h4>Dr. Coudi</h4>
            <p>+1254799852</p>
        </div>
    );
};

export default Doctors;