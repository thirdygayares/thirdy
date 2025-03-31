import {blogAuthors} from "@/data/blogAuthors";
import Image from "next/image";
import ImageComponent from "@/components/ImageComponent";
import {imagePath} from "@/types/imagePath";
import Icon from "@/components/Icon";

interface BlogAuthorProps {
    authorID?: string;
}

const BlogAuthorComponent = (blogAuthorProps:BlogAuthorProps) => {
    const { authorID="THIRDY" } = blogAuthorProps;

    const authorData = blogAuthors.find(author => author.id === authorID);

    if (!authorData){
        console.error(`Author ${authorID} not found`);
        return null;
    }
    const { image, name } = authorData;

    const authorImage = imagePath.AUTHOR(image);

    return (
        <div className="flex items-center gap-1 ps-5 pr-20 py-2 rounded-2xl bg-white shadow-md w-fit">
            <div className="w-10 h-10 mr-3  overflow-hidden">
                <ImageComponent image={authorImage} altName={name} width={150} height={150} className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-1">
                <div>
                    <p className="text-md font-bold text-zinc-900">{authorData.name}</p>
                    <p className="text-xs font-medium text-blue-950">Author</p>
                </div>



            </div>
        </div>
    )
}

export default BlogAuthorComponent;