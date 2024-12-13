export interface Project{
    name: string;
    description: string;
    image: string;
    sources?: Source[];
}

export interface Source{
    icon: string;
    url: string;
}