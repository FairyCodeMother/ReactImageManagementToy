/**
 * User can upload files from their local machine
 * Filename is used as the image name
 * Only image files are allowed
 * Image names are searchable
 */

"use client";

import { ChangeEvent } from "react";
import { Upload } from "lucide-react";

interface ImageUploadProps {
    onUpload: (file: File) => void;
}

export const ImageUpload = ({ onUpload }: ImageUploadProps) => {
    // Handle file input change
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !file.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            return;
        } else {
            onUpload(file);
            event.target.value = ""; // Reset input value after upload
        }
    };

    return (
        <label
            htmlFor="image-upload"
            className="image-upload-label"
        >
            <Upload className="image-upload-icon" />
            <span className="image-upload-text">
                UPLOAD
            </span>
            <input
                className="hidden"
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
            />
        </label>
    );
};