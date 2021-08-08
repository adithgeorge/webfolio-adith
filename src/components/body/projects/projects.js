
import React from 'react';
import { ProjectData } from '../../../data/projects';
import './projects.css';
import ProjectCard from './project-card'
import Separator from '../../../common/separator/separator';

function Projects() {
    const data = ProjectData;

    return (
        <div className='projects'>
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                    // Project passed as prop
                    return <ProjectCard project={project}/>
                }
                )
                }
            </div>

        </div>
    );
}

export default Projects;
