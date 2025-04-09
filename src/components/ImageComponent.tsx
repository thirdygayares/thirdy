"use client";

import React, {useState} from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";
import clsx from "clsx";

interface ImageComponentProps {
    image: string;
    altName: string;
    className?: string;
    zoomable?: boolean;
    height?: number;
    width?:number;
}

const ImageComponent = (imageComponentProps: ImageComponentProps) => {
    const { image, zoomable=true , altName, height=720, width=1080, className } = imageComponentProps;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleZoom = () => {
        if (zoomable) {
            setIsModalOpen(true);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const imageClassName = className ? className : "rounded-lg shadow-2xl";

    return (
        <div>
            <Image
                        src={image}
                        alt={altName || "Image"}
                        width={height}
                        height={width}
                        className={clsx("cursor-zoom-in", imageClassName)}
                        onClick={handleZoom}
            />

            {isModalOpen &&
                <ImageModal image={image} onClose={closeModal} altName={altName} width={width} height={height}/>
            }
        </div>
    );
};

export default ImageComponent;
