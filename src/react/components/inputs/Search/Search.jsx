import { useState } from "react";
import { Text } from "@telegram-apps/telegram-ui";
import SearchIcon from "@/assets/icons/search.svg?react"

import "./Search.css";

export function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search">
            <SearchIcon className="search__icon" />
            <input
                className="search__input"
                placeholder="Найти..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
}