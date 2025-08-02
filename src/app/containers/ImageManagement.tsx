/**
 * Business logic, React hooks, and state management
 * Using localStorage as simulated DB
 * All "API" calls are mocked
 */

"use client";

import { useEffect, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { ImageGrid } from "@/components/ImageGrid";
import { UserImage } from "@/type";
import { 
    fetchAllImages,
    uploadImage,
    deleteImage,
    searchImages
} from "@/lib/mock-api";

export const ImageManagement = () => {
    const [images, setImages] = useState<UserImage[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    
    // Fetch images from the API on mount (localStorage as DB)
    useEffect(() => {
        fetchAllImages().then(setImages).catch(console.error);
    }, []);

    // Handle image search
    const handleSearch = async (query: string) => {
        setSearchQuery(query);
        if (query.trim() === "") {
            const allImages = await fetchAllImages();
            setImages(allImages);
        } else {
            const allImages = await searchImages(query);
            setImages(allImages);
        }
    };

    // Handle image upload
    const handleUpload = async (file: File) => {
        const newImage = await uploadImage(file);
        setImages(prev => [...prev, newImage]);
    };

    // Handle image delete
    const handleDelete = async (id: string) => {
        await deleteImage(id);
        setImages(prev => prev.filter(image => image.id !== id));
    };

    return (
        <div className="min-h-screen text-gray-800 p-8 max-w-5xl mx-auto">
            <h1>REACT SPA Image Manager</h1>
            <TopBar
                query={searchQuery}
                onSearch={handleSearch}
                onUpload={handleUpload}
            />
            <ImageGrid images={images} onDelete={handleDelete} />
        </div>
    );  
    
}
