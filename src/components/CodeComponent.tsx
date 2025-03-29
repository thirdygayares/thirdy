import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import {useState} from "react";
import {ClipboardDocumentCheckIcon, ClipboardIcon} from "@heroicons/react/24/solid";

interface CodeComponentProps{
    code: string;
    language?: string;
}

const CodeComponent = (codeComponentProps: CodeComponentProps) => {
    const { code, language="javascript" } = codeComponentProps;

    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };


    return (
        <div className="relative bg-gray-800  text-white px-2 md:px-4 pt-5 pb-1 rounded-lg overflow-x-auto w-full">
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded text-sm hover:bg-gray-600 transition"
            >
                {copied ? <ClipboardDocumentCheckIcon className="size-4" /> : <ClipboardIcon className="size-4" />}
            </button>
            <SyntaxHighlighter language={language} style={dracula} >
                {code}
            </SyntaxHighlighter>
        </div>
    );
}

export default CodeComponent;