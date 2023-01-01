import React from 'react';
import Banner from '../Banner/Banner';
import AllProducts from '../Services/AllProducts';

import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Services></Services>
            <AllProducts></AllProducts>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;