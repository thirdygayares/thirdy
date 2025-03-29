import React from "react";
import Image from "next/image";

interface ImageModalProps {
    image: string;
    onClose: () => void;
    altName?: string;
    height?: number;
    width?:number;
}

const ImageModal = (imageModalProps: ImageModalProps) => {
    const { image, onClose, altName, height=720, width=1080 } = imageModalProps;
    return (
        // bg-opacity-75
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50" onClick={onClose}>
            <div className="relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-white/60 backdrop-blur-sm rounded-full py-2 px-4  text-black hover:bg-gray-200"
                >
                    ✕ Close
                </button>
                {/* Zoomed Image */}
                <Image
                    src={image}
                    alt={altName || "Image"}
                    width={height}
                    height={width}
                    className=" max-h-screen object-contain rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default ImageModal;
