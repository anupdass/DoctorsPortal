import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../Infocard/Infocard.css"

const Infocard = ({ info }) => {
    return (
        <div className="col-md-4 text-white inco-card">
            <div className={`d-flex align-items-center justify-content-center info-container info-${info.background}`}>
                <div className="ms-3 ">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div >
                    <h6>{info.title}</h6>
                    <small>{info.discription}</small>
                </div>
            </div>
        </div>
    );
};

export default Infocard;