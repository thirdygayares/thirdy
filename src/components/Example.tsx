import React from 'react';

interface Props {
    title: string;
}

const Example: React.FC<Props> = ({ title }) => {
    return <h1 className="header-xl">{title}</h1>;
};

export default Example;