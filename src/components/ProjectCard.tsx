import React from "react";
import Icon from "@/components/Icon";
import {Project, Source} from "@/types/project";

const ProjectCard = ({ project, onImageClick }: { project: Project; onImageClick: (image: string) => void }) => {
    const { name, description, image, sources } = project;

    return (
        <div className="flex flex-col xl:flex-row gap-4 bg-info shadow-2xl rounded-xl p-6">
            {/* Image with Click Event */}
            <img
                src={`/image/project-cover/${image}`}
                alt={name}
                onClick={() => onImageClick(`/image/project-cover/${image}`)}
                className="aspect-w-16 self-center aspect-h-9 rounded-lg shadow-2xl object-contain h-48 w-96 p-2 cursor-pointer hover:opacity-90"
            />
            <div className="w-0.5 bg-primary/20 hidden xl:block h-48"></div>
            <section className="flex flex-col gap-4 self-center">
                <div>
                    <h1 className="title-md font-extrabold text-secondary">{name}</h1>
                    <p className="line-clamp-6">{description}</p>
                </div>
                {sources && sources.length > 0 && (
                    <div className="flex gap-2">
                        {sources.map((source: Source) => {
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
};

export default ProjectCard;
