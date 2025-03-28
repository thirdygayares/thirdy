import React from "react";

interface ImageModalProps {
    image: string;
    onClose: () => void;
    altName?: string;
}

const ImageModal = (imageModalProps: ImageModalProps) => {
    const { image, onClose, altName } = imageModalProps;
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
                <img
                    src={image}
                    alt={altName || "Image"}
                    className=" max-h-screen object-contain rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default ImageModal;
