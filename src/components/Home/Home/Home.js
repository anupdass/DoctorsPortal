import React from 'react';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureService from '../FeatureService/FeatureService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testinomial from '../Testinomial/Testinomial';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <Testinomial></Testinomial>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;