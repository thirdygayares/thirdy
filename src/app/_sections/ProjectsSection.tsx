import Icon from "@/components/Icon";
import React from "react";
import { projects } from "@/data/project";

const ProjectsSection = () => {

    const projectList = projects.map((project) => {
        const { name, description, image, sources } = project;

        return (
            <div key={name} className="flex flex-col xl:flex-row gap-4 bg-info shadow-2xl rounded-xl p-6">
                <img
                    src={`/image/project-cover/${image}`}
                    alt={name}
                    className="aspect-w-16 self-center aspect-h-9 rounded-lg shadow-2xl object-contain h-48 w-96 p-2"
                />
                <div className="w-0.5 bg-primary/20 hidden xl:block h-48"></div>
                <section className="flex flex-col gap-4 self-center">
                    <div>
                        <h1 className="title-md font-extrabold text-secondary">{name}</h1>
                        <p className="line-clamp-6">{description}</p>
                    </div>
                    {sources && sources.length > 0 && (
                        <div className="flex gap-2">
                            {sources.map((source) => {
                                const { icon, url } = source;
                                return (
                                    <a key={icon} href={url} target="_blank" rel="noreferrer">
                                        <Icon
                                            path={icon}
                                            alt={icon}
                                            className="w-7 h-7 sepia saturate-200 brightness-90 contrast-100 hue-rotate-180"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </section>
            </div>
        );
    });


    return (
        <section className="container m-auto px-8 xl:px-0 flex flex-col gap-3">
            <h2 className="text-center text-xl font-bold mb-4">Project</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">{projectList}</div>
        </section>
    );
};

export default ProjectsSection;
