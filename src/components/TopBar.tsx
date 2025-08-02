/**
 * Contains SearchBar and Upload button
 */

"use client";

import { SearchBar } from "./SearchBar";
import { ImageUpload } from "./ImageUpload";

interface TopBarProps {
    query: string;
    onSearch: (query: string) => void;
    onUpload: (file: File) => void;
}

export const TopBar = ({ query, onSearch, onUpload }: TopBarProps) => {
    return (
        <div>
            <div className="search-bar mb-10 w-full">
                <div className="w-full md:max-w-2xl">
                    <SearchBar query={query} onSearch={onSearch} />
                </div>
                <div className="w-full md:w-auto md:ml-auto">
                    <ImageUpload onUpload={onUpload} />
                </div>            
            </div>
        </div>
    );
};