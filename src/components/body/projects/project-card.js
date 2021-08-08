
import React from 'react';
import './project-card.css';
// https://devicon.dev/
function ProjectCard({ project }) {

    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <div className='project-links'>
                    {project.demo &&
                        <a className='project-link' href={project.demo}>
                            <div className='link-button'>
                                <i class="bi bi-globe"></i>Demo
                            </div>
                        </a>}
                    {project.github &&
                        <a className='project-link' href={project.github}>
                            <div className='link-button'>
                                <i class="devicon-github-original colored"></i>GitHub
                            </div>
                        </a>}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags &&
                        project.tags.map((tag) => {
                            return (
                                <label className="tag">{tag}</label>
                            )
                        }
                        )}
                </div>
            </div>
            <div>
                {/* Make sure class names are different as react builds css together and styles may overlap */}
                <img src={project.image} className='project-photo' alt='project'></img>
            </div>

        </div>
    );
}

export default ProjectCard;
