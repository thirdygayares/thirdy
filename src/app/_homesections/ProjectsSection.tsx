"use client";

import React, { useState } from "react";
import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";
import ImageModal from "@/components/ImageModal";

const ProjectsSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [modalAlt, setModalAlt] = useState("");

    const openModal = (image: string, alt:string) => {
        setModalImage(image);
        setModalAlt(alt);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage("");
    };

    const projectList = projects.map((project) => {
        const {name} = project;
        return(
            <ProjectCard key={name} project={project} onImageClick={openModal} />
        )
    })

    return (
        <section id="project" className="container m-auto px-8 xl:px-0 flex flex-col gap-3 scroll-mt-24">
            <h2 className="text-center text-xl font-bold mb-4">Project</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
                {projectList}
            </div>

            {isModalOpen &&
                <ImageModal image={modalImage} onClose={closeModal} altName={modalAlt} />
            }
        </section>
    );
};

export default ProjectsSection;
