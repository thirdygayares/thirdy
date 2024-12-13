import { useMemo } from "react";

export const useIcon = (path: string, category: string = "skills") => {
    const BASE_PATH = `/icons/${category}/`; // Base path for icons
    const iconPath = useMemo(() => BASE_PATH + path, [path, category]);

    return iconPath;
};
