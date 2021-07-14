import React from 'react';
import doctor from '../../../images/5790-removebg.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='make-appointment container rounded mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 '>
                        <img className='img-fluid' src={doctor} alt="" />
                    </div>
                    <div className='col-md-7 py-5 text-white'>
                        <h5>Appointment</h5>
                        <h1 className='my-4'>Make an appointment</h1>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga nam nesciunt nisi esse modi natus excepturi, dicta aliquam. Corrupti quos amet ipsa debitis atque commodi iusto recusandae quas et voluptates.</p>
                        <button className='btn btn-primary my-3'>Make an appointment</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;