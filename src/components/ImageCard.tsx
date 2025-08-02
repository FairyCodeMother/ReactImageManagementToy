/**
 * Contains image, name, and delete button
 * Image is responsive and fills the card
 * Deletes by image id
 * Footer has hover effect
 */

"use client";

import Image from "next/image";
import { X, Trash2 } from "lucide-react";
import { UserImage } from "@/type";

interface ImageCardProps {
    image: UserImage;
    onDelete: (id: string) => void;
}

export const ImageCard = ({ image, onDelete }: ImageCardProps) => {
    return (
        <div className="image-card">
            <div className="image-card-image-wrapper">
                <Image
                    src={image.url}
                    alt={image.name}
                    fill
                    className="image-card-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
            </div>
            <div className="image-card-footer">
                <p className="image-card-name">{image.name}</p>
                <button
                    onClick={() => onDelete(image.id)}
                    className="image-card-delete-btn"
                    aria-label={`Delete ${image.name}`}
                >
                    <Trash2 className="image-card-delete-icon" />
                </button>
            </div>
        </div>
    );
};