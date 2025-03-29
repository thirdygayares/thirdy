import {ExclamationTriangleIcon} from "@heroicons/react/24/solid";
import CodeComponent from "@/components/CodeComponent";
import ImageComponent from "@/components/ImageComponent";
import {imagePath} from "@/types/imagePath";

const blogContent = () => {
    const myImagePath = 'react/1-set-up-react-vite-typescript'

    return(
        <article className="container m-auto flex flex-col p-4 md:px-0 gap-4">

        <h1 className="text-lg md:text-2xl font-extrabold py-2">How to Install and Set Up React with Vite and TypeScript (Step by Step)</h1>

            <div>
                In this article, I will show you how to set up a <strong>React</strong> project using <strong>Vite</strong>  and <strong>TypeScript</strong>  step by step. This guide is perfect for beginners who want to start using React with TypeScript in a fast and efficient way. By the end, you will have a working project that is ready for development.
            </div>

            <hr/>

            <div className="flex flex-col bg-amber-50 px-5 py-4 gap-2 rounded-2xl my-2 text-sm">
                <p className="flex gap-2 font-bold"><ExclamationTriangleIcon className="size-5 text-gray-400"/> Important Note</p>
                <p>Before starting, make sure you have Node.js installed on your machine. Vite requires Node.js to run. You can download and install it from the official website: https://nodejs.org/.</p>
            </div>
            <div className="flex flex-col gap-20 py-10">
                {/*1*/}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">1. Create a Vite + React + TypeScript Project</h3>
                    <p>Run the following command in your terminal:</p>
                    <CodeComponent code={`npm create vite@latest my-new-app --template react-ts`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/1-create-vite.png`)} altName={"1. Create a Vite + React + TypeScript Project"} className=" border-2 border-gray-200 rounded-2xl"/>
                    <p>Choose React:</p>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/2-choose-react.png`)} altName={"2. Choose React"} className=" border-2 border-gray-200 rounded-2xl w-96"/>
                    <p>Choose Typescript:</p>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/3-choose-typescript.png`)} altName={"3. Choose TypeScript"} className=" border-2 border-gray-200 rounded-2xl w-96"/>
                    <p>Then, go into the project folder:</p>
                    <CodeComponent code={`cd my-new-app`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/4-go-into-the-project-folder.png`)} altName={"4. Go to the Project"} className=" border-2 border-gray-200 rounded-2xl w-96"/>
                </div>

                <hr/>

                {/*2*/}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">2. Install Dependencies</h3>
                    <p>Run:</p>
                    <CodeComponent code={`npm install`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/5-install-dependencies.png`)} altName={"5. Install Dependencies"} className=" border-2 border-gray-200 rounded-2xl w-96"/>
                </div>


                {/*3*/}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">3. View Source Code on your favorite IDE </h3>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/6-view-source-code.png`)} altName={"View Source Code on your favorite IDE "} className=" border-2 border-gray-200 rounded-2xl"/>

                </div>

                {/*4*/}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">4: Run your code</h3>
                    <p>Run:</p>
                    <CodeComponent code={`npm run dev`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/7-run-your-code.png`)} altName={"Rubn your code "} className=" border-2 border-gray-200 rounded-2xl"/>
                    <h3>Your <strong>React + Vite + TypeScript</strong> project is now ready!</h3>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/8-react-run-output.png`)} altName={"React Setup Output"} className="my-5 border-2 border-gray-200 rounded-2xl"/>

                </div>
            </div>

        </article>
    )
}
export default blogContent;