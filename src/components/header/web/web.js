
import React from 'react';
import './web.css'

function Web() {

    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project'>
                    <i class="bi bi-code-square option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skill'>
                <i class="bi bi-laptop option-icon"></i>Skills
                </a>

            </div>
            <div className='web-option'>
                <a href='#work'>
                    <i class="bi bi-briefcase option-icon"></i>Work
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'>
                <i class="bi bi-person option-icon"></i>Contact
                </a>

            </div>
        </div>
    );
}

export default Web;
