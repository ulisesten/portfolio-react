import React, { useState } from 'react';
import "./project_card.css";

export default function ProjectCard({project}) {

    const [isShown, setIsShown] = useState(false);

    return <div
                onMouseEnter={()=> setIsShown(true)}
                onMouseLeave={()=> setIsShown(false)}
                className="project-card hover-border-3 col-4">

                <div className="project-card__image">
                    <img  src={project.image_url}/>
                </div>
                <div>
                    <h2 className="card-name">
                        {project.name}
                    </h2>
                    {isShown?<div className="card-desc">
                        {project.description}
                    </div> : <div className="card-desc-invisible">
                        {project.description}
                    </div>}
                </div>
            </div>
}