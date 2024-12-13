import React from "react";

type IconProps = {
    path: string;
    category?: string;
    alt: string;
    className?: string;
};

const Icon: React.FC<IconProps> = ({path, category = "skills", alt, className = "w-8 h-8 object-contain",}) => {
    const BASE_PATH = `/icons/${category}/`;
    return <img src={`${BASE_PATH}${path}`} alt={alt} className={className} />;
};

export default Icon;
