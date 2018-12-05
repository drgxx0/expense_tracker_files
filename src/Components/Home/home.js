import React from 'react';
import Footer from 'Components/footer/footer'

import './home.css'

const Home = (props) =>  {
    return (
        <div className='container'>
            <div className='bg'>
                <div className='typo'><h1>The most easiest way to track your expense</h1></div>
                <div className='bt' onClick={() => props.changeRoute('signin')}>Start</div>
                <Footer />
            </div>
        </div>
    );
}


  export default Home;