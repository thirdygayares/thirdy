import Icon from "@/components/Icon";

interface BlogSuggestionComponentProps {
    link: string;
}

const BlogSuggestionComponent = (blogSuggestionComponentProps: BlogSuggestionComponentProps) => {
    const {link} = blogSuggestionComponentProps;

    return (
        <div className="flex flex-col gap-4 p-5">
            <h5>Do you have any comments or suggestions?</h5>
            <a href={link} target="_blank" rel="noreferrer">
                <button className="btn-primary flex gap-2 items-center "><Icon path="github-black.svg"
                                                                               alt="github"/> Comment on Github
                </button>
            </a>
        </div>
    )
}

export default BlogSuggestionComponent;