import React from 'react';

const ServicesDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center p-3">
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h4 className='mt-3 mb-3'>{service.name}</h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, repellat?</p>
        </div>
    );
};

export default ServicesDetails;