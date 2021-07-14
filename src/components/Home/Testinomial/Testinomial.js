import React from 'react';
import wilson from '../../../images/Ellipse 1.png'
import ema from '../../../images/Ellipse 2.png'
import aliza from '../../../images/Ellipse 3.png'
import TestinomialData from '../TestinomialData/TestinomialData';
import './Testinomial.css'

const testinomialdata = [
    {
        quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repellendus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repellendus.Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        name:'wilson',
        form:'california',
        img: wilson
    },
    {
        quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repellendus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repellendus.Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        name:'ema',
        form:'california',
        img: ema
    },
    {
        quote:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repellendus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, repellendus.Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        name:'aliza',
        form:'california',
        img: aliza
    }
]

const Testinomial = () => {
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 d-flex">
                    {
                        testinomialdata.map(testimonial => <TestinomialData testimonial={testimonial}></TestinomialData>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testinomial;