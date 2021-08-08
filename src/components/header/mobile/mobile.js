
import React from 'react';
import './mobile.css';

function Mobile({ isOpen, setIsOpen }) {

    return (
        <div className='mobile'>
            {/* Toggle for mobile view */}
            <div className='close-icon' onClick={() => setIsOpen(!isOpen)}>
                <i class="bi bi-x-circle"></i>
            </div>

            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href='#project'>
                        <i class="bi bi-code-square option-icon"></i>Projects
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#skill'>
                        <i class="bi bi-laptop option-icon"></i>Skills
                    </a>

                </div>
                <div className='mobile-option'>
                    <a href='#work'>
                        <i class="bi bi-briefcase option-icon"></i>Work
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#contact'>
                        <i class="bi bi-person option-icon"></i>Contact
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Mobile;
