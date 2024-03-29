import React from 'react';
import './skill-card.css';

// Pick icons from devicons.dev

function SkillCard({ skill }) {
    return (
        < div className='skill-card'>
            <div className='skill-icon'>{skill.icon}</div>
            <label className='skill-name'>{skill.name}</label>
        </div >
    )
}

export default SkillCard;