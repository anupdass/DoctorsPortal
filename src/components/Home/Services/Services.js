import React from 'react';
import flouride from '../../../images/flouride.png'
import cavite from '../../../images/cavite.png'
import whitening from '../../../images/whitening.png'
import ServicesDetails from '../ServiceDetails/ServiceDetails';


const servicedata=[
    {
        name:'Flouride Treatment',
        img:flouride
    },
    {
        name:'cavite Filling',
        img:cavite
    },
    {
        name:'Teeth whitening',
        img:whitening
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center">
                <h5 className="text-primary">OUR SERVICES</h5>
                <h2>SERVICE WE PROVIDE</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-5'>
                {
                    servicedata.map(service => <ServicesDetails service={service}></ServicesDetails>)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;