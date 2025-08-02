/**
 * Displays individual ImageCards
 * Desktop: 2 cols, Mobile: 1 col
 * Displays message if no images
 */

import React from "react";
import { UserImage } from "@/type";
import { ImageCard } from "./ImageCard";

interface ImageGridProps {
    images: UserImage[];
    onDelete: (id: string) => void;
}

export const ImageGrid = ({ images, onDelete }: ImageGridProps) => {
    if (images.length === 0) {
        return (
            <p className="text-gray-500 text-center col-span-full">
                No images to display.
            </p>
        );
    }

    return (
        <div className="image-grid">
            {images.map((img) => (
                <ImageCard key={img.id} image={img} onDelete={onDelete} />
            ))}
        </div>
    );
};