import React from 'react';
import chair from '../../../images/Chair.png'

const Headermain = () => {
    return (
       <main style={{height:"500px"}} className='row align-items-center'>
           <div className="col-md-4 offset-md-1">
               <h1 style={{color:"rgb(34, 32, 61)"}}>your new Smile <br /> start here</h1>
               <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, natus?</p>
               <button className="btn btn-primary">Get appointment</button>
           </div>
           <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid" />
           </div>

       </main>
    );
};

export default Headermain;