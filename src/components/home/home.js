import React from 'react';
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Body from '../body/body'

function Home() {

    return (
        <div className="home">
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
