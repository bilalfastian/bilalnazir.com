import React from "react";
import './ProjectListing.css';
import "flexboxgrid"

const ProjectListing = ({projects}) => {

    const projectsList = projects.map(project => {
        return (
            <a key={project.node.id} href={project.node.link} className="row project-item" target={"_blank"}>
                <div className="project-info col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img src={project.node.image.fluid.srcWebp} alt={project.node.title} style={{width: "100%"}}/>
                </div>
                <div className="project-info col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <h3>{project.node.title}</h3>
                    <p>{project.node.description}</p>
                </div>
            </a>
        )
    });

    return (
        <div className="project-listing">
            {projectsList}
        </div>
    )
};
export default ProjectListing;