"use client";

import React, { useState } from "react";
import { projects } from "@/data/project";
import ProjectCard from "@/components/ProjectCard";
import ImageModal from "@/components/ImageModal";

const ProjectsSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openModal = (image: string) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage("");
    };

    return (
        <section id="project" className="container m-auto px-8 xl:px-0 flex flex-col gap-3 scroll-mt-24">
            <h2 className="text-center text-xl font-bold mb-4">Project</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} onImageClick={openModal} />
                ))}
            </div>

            {isModalOpen && <ImageModal image={modalImage} onClose={closeModal} />}
        </section>
    );
};

export default ProjectsSection;
