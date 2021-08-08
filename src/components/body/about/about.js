
import React from 'react';
import SocialContact from '../../../common/social-contact/social-contact';

import './about.css';

function About() {

    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello There! I am
                    <br /> <span className='info-name'>Adith.</span>
                    <br />I am a software developer.
                </div>
                <div className='about-photo'>
                    <img className='info-picture' src={require('../../../assets/coder.png').default} alt='info'></img>
                </div>
            </div>
            <div className='about-bottom'>
            </div>
            <SocialContact />
        </div>
    );
}

export default About;
