import {ExclamationTriangleIcon} from "@heroicons/react/24/solid";
import CodeComponent from "@/components/CodeComponent";

const blogContent = () => {
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
                </div>

                <hr/>

                {/*2*/}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">2. Install Dependencies</h3>
                    <p>Run:</p>
                    <CodeComponent code={`npm install`} language={"bash"}/>
                </div>


                {/*3*/}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">3. View Source Code on your favorite IDE </h3>
                </div>

                {/*4*/}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">4: Run your code</h3>
                    <p>Run:</p>
                    <CodeComponent code={`npm run dev`} language={"bash"}/>
                </div>
            </div>

        </article>
    )
}
export default blogContent;