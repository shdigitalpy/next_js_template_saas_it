import React from 'react';
import NavbarPersonalPortfolio from '../components/_App/NavbarPersonalPortfolio';
import MainBanner from '../components/PersonalPortfolio/MainBanner';
import AboutUs from '../components/PersonalPortfolio/AboutUs';
import Services from '../components/PersonalPortfolio/Services';
import Works from '../components/PersonalPortfolio/Works';
import Testimonials from '../components/PersonalPortfolio/Testimonials';
import Partner from '../components/PersonalPortfolio/Partner';
import BlogPost from '../components/PersonalPortfolio/BlogPost';
import ContactUs from '../components/PersonalPortfolio/ContactUs';
import FooterSaas from '../components/_App/FooterSaasStartup';
 
const PersonalPortfolio = () => {
    return (
        <>
            <NavbarPersonalPortfolio />
            <MainBanner />
            <AboutUs />
            <Services />
            <Works />
            <Testimonials />
            <Partner />
            <BlogPost />
            <ContactUs />
            <FooterSaas />
        </>
    )
}

export default PersonalPortfolio;