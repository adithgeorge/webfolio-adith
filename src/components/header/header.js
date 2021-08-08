import React, { useState } from 'react';
import './header.css'
import Web from './web/web';
import Mobile from './mobile/mobile';

function Header() {

    // React Hooks Set State
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='header'>
            <div className='logo'>
                Resume
            </div>
            <div className='menu'>
                <div className='web-menu'>
                    <Web />
                </div>
                <div className='mobile-menu'>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        {/* <button className='menu-icon hamburger hamburger--collapse' type='button'>
                            <span className='hamburger-box'>
                                <span class='hamburger-inner'></span>
                            </span>
                        </button> */}
                        <i class="bi bi-list menu-icon"></i>
                    </div>
                    {/* Passing the state variables as props to mobile */}
                    {isOpen===true?<Mobile isOpen={isOpen} setIsOpen={setIsOpen} />:null}
                </div>
            </div>
        </div>
    );
}

export default Header;
