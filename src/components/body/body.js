
import React from 'react';
import './body.css'
import About from './about/about';
import Contact from './contact/contact';
import Projects from './projects/projects';
import Skills from './skills/skills';
import Work from './work/work';

function Body() {
  
  return (
      <div className='body'>
        
        {/* Separating UI Components and coding individually */}
        <section id='about'>
            <About />
        </section>
        <section id='projects'>
            <Projects />
        </section>
        <section id='skills'>
            <Skills />
        </section>
        <section id='work'>
            <Work />
        </section>
        <section id='contact'>
            <Contact />
        </section>
      </div>  
    );
}

export default Body;
