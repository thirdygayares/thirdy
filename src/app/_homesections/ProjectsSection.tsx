"use client";

import React from "react";
import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {


    const projectList = projects.map((project) => {
        const {name} = project;
        return(
            <ProjectCard key={name} project={project}  />
        )
    })

    return (
        <section id="project" className="container m-auto px-8 xl:px-0 flex flex-col gap-3 scroll-mt-24">
            <h2 className="text-center text-xl font-bold mb-4">Project</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
                {projectList}
            </div>
        </section>
    );
};

export default ProjectsSection;
