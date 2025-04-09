export default async function sitemap() {
    const baseUrl = "https://thirdygayares.com";
    const currentDate = new Date();

    const routes = [
        {path: "", priority: 1, changeFrequency: "daily"},
        {path: "/react/set-up-react-vite-typescript", priority: 0.8, changeFrequency: "weekly"},
        {path: "/FastAPI/set-up-python-fast-api", priority: 0.8, changeFrequency: "weekly"},

    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: currentDate,
        priority: route.priority,
        changeFrequency: route.changeFrequency,
    }));
}