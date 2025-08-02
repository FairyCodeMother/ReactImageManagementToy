/**
 * Live search by image name (after user stops typing)
 * Width is responsive
 */

"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
    query: string;
    onSearch: (query: string) => void;
}

export const SearchBar = ({ query, onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState(query);

    // Update input as user types
    useEffect(() => {
        setInputValue(query);
    }, [query]);

    useEffect(() => {
        // Wait till user stops typing to search
        const delay = setTimeout(() => {
            onSearch(inputValue);
        }, 300);

        // Cleanup on unmount and inputs
        return () => clearTimeout(delay);
    }, [inputValue, onSearch]);

    return (
        <div className="search-bar">
            <div className="relative w-full">
                <Search className="input-icon" />
                <input
                    className="input-base w-full"
                    type="text"
                    placeholder="Type to start searching by name..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
        </div>
    );
};
