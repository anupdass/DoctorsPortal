import React from 'react';
import Infocard from '../Infocard/Infocard';

import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const businesinfo = [
    {
        title:'Openint Hour',
        discription: ' we are open 7 days',
        icon: faClock,
        background : 'primary'
    },
    {
        title:'Visit our Location',
        discription: ' brokly newwork 1205',
        icon: faMapMarker,
        background : 'dark'
    },
    {
        title:'call us now',
        discription: ' 12546977',
        icon: faPhone,
        background : 'primary'
    }
]

const Businessinfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='75 row'>
            {
                businesinfo.map(data=> <Infocard info={data}></Infocard>)
            }
            </div>
        </section>
    );
};

export default Businessinfo;