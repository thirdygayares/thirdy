import {ExclamationTriangleIcon} from "@heroicons/react/24/solid";
import CodeComponent from "@/components/CodeComponent";
import ImageComponent from "@/components/ImageComponent";
import {imagePath} from "@/types/imagePath";
import BlogAuthorComponent from "@/components/BlogAuthorComponent";

const blogContent = () => {
    const myImagePath = 'fastAPI/1-set-up-fastapi'

    return (
        <article className="flex flex-col p-4 md:px-0 gap-4">
            <h1 className="text-lg md:text-2xl font-extrabold py-2">
                How to Build Your First FastAPI App – Step-by-Step
            </h1>

            <BlogAuthorComponent/>

            <div>
                In this article, I will show you how to set up a FastAPI project step by step. This guide is perfect for
                beginners who want to start using FastAPI to build modern Python APIs quickly and efficiently. By the
                end, you will have a working API server ready for development and deployment.
            </div>

            <hr/>

            <div className="flex flex-col bg-amber-50 px-5 py-4 gap-2 rounded-2xl my-2 text-sm">
                <p className="flex gap-2 font-bold">
                    <ExclamationTriangleIcon className="size-5 text-gray-400"/> Important Note
                </p>
                <p>
                    Before starting, make sure you have Python 3.7 or higher installed on your machine. FastAPI requires
                    Python to run. You can download and install it from the official website: <a
                    href="https://www.python.org/" className="text-blue-600 underline">https://www.python.org/</a>
                </p>
            </div>

            <div className="flex flex-col gap-20 py-10">

                {/* 1. Check Python Version */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">1. Check Python Version</h3>
                    <CodeComponent code={`python --version`} language={"bash"}/>
                </div>

                {/* 2. Create Virtual Environment */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">2. Create a Virtual Environment</h3>
                    <CodeComponent code={`python -m venv .venv`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/1-create-venv.png`)}
                                    altName={"Create virtual environment"}
                                    className="border-2 border-gray-200 rounded-2xl w-96"/>
                </div>

                {/* 3. Activate Virtual Environment */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">3. Activate Virtual Environment</h3>
                    <p><strong>On Windows:</strong></p>
                    <CodeComponent code={`.venv\\Scripts\\activate`} language={"bash"}/>
                    <p><strong>On macOS / Linux:</strong></p>
                    <CodeComponent code={`source .venv/bin/activate`} language={"bash"}/>
                    <p>You will know that your virtual environment is activated when you see the environment name at the
                        beginning of your terminal prompt, like this:</p>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/activate_virtual_environment.png`)}
                                    altName={"Activate Virtual Environment"}
                                    className="border-2 border-gray-200 rounded-2xl w-96"/>
                    <p>This means all Python packages you install (like FastAPI, Uvicorn, etc.) will now be installed
                        inside this environment only – not system-wide.</p>
                    <p>If you don&#39;t see (.venv) in the terminal, that means the activation failed. Try again or
                        check the path.</p>

                </div>

                {/* 4. Install FastAPI and Uvicorn */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">4. Install FastAPI and Uvicorn</h3>
                    <CodeComponent code={`pip install fastapi uvicorn`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/2-install-fastapi-uvicorn.png`)} width={1920}
                                    height={1920} altName={"Install FastAPI and Uvicorn"}
                                    className="border-2 border-gray-200 rounded-2xl"/>
                </div>

                {/* 5. Create main.py */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">5. Create main.py</h3>
                    <CodeComponent code={`from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}`} language={"python"}/>
                </div>

                {/* 6. Run FastAPI App */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">6. Run the FastAPI App</h3>
                    <CodeComponent code={`uvicorn main:app --reload`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/3-run-app-output.png`)}
                                    altName={"FastAPI running output"}
                                    className="border-2 border-gray-200 rounded-2xl"/>
                </div>

                {/* 7. Open in Browser */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">7. Access FastAPI in Browser</h3>
                    <CodeComponent code={`http://127.0.0.1:8000`} language={"bash"}/>
                    <CodeComponent code={`{
  "message": "Hello, FastAPI!"
}`} language={"json"}/>
                </div>

                {/* 8. Explore Swagger / ReDoc */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">8. Explore FastAPI Docs</h3>
                    <p>Swagger UI:</p>
                    <CodeComponent code={`http://127.0.0.1:8000/docs`} language={"bash"}/>
                    <p>ReDoc:</p>
                    <CodeComponent code={`http://127.0.0.1:8000/redoc`} language={"bash"}/>
                    <ImageComponent image={imagePath.BLOG(`${myImagePath}/4-open-docs.png`)} height={1080}
                                    altName={"FastAPI Swagger Docs"} className="border-2 border-gray-200 rounded-2xl"/>
                </div>

                {/* 9. Add Another Route */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">9. Add More Routes</h3>
                    <CodeComponent code={`@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}`} language={"python"}/>
                    <p>Test it in browser:</p>
                    <CodeComponent code={`http://127.0.0.1:8000/items/42?q=test`} language={"bash"}/>
                    <CodeComponent code={`{
  "item_id": 42,
  "q": "test"
}`} language={"json"}/>
                </div>

                {/* 10. Create requirements.txt */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold">10. Create requirements.txt (Optional)</h3>
                    <CodeComponent code={`pip freeze > requirements.txt`} language={"bash"}/>
                    <CodeComponent code={`pip install -r requirements.txt`} language={"bash"}/>
                </div>
            </div>
        </article>
    )
}

export default blogContent;
