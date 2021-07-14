import React from 'react';
import Feature from '../../../images/Mask Group 3.png'

const FeatureService = () => {
    return (
        <section className='container my-3'>
            <div className='container  row p-3 justify-content-center'>
                <div className='col-md-5 p-3 '>
                    <img  className='img-fluid rounded ' src={Feature} alt="" />
                </div>
                <div className='col-md-5 align-self-center'>
                    <h2>Exceptional Dental Care, on your terms</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam eius at assumenda placeat consectetur excepturi voluptatum earum, ex aliquamorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam eius at assumenda placeat consectetur excepturi voluptatum earum, ex aliquam.</p>
                    <button className='btn btn-primary'>click here</button>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;