import React from "react";
import {skills} from "@/data/skill";
import Icon from "@/components/Icon";

const SkillsSection: React.FC = () => {

    const skillsList = skills.map((skill) => {
        const {name, icon} = skill;
        return (
            <div key={name} className="flex flex-col md:flex-row  gap-4 items-center bg-info shadow-2xl rounded-xl px-6 py-4">
                {<Icon path={icon} alt={name}  />}
                <p>{name}</p>
            </div>
        );
    });

    return (
        <section className="container m-auto px-8 xl:px-0 flex flex-col gap-3">
            <h2 className="text-center text-xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center  gap-4">
                {skillsList}
            </div>
        </section>
    );
};

export default SkillsSection;
