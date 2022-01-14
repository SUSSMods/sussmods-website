import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

export default function SearchBar({ data }) {

    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function handleSearchInput(e) {
        const newSearchInput = e.target.value.toLowerCase();
        console.log(newSearchInput);
        setSearchInput(newSearchInput);

        const newSearchResults = data.filter((mod) => {
            return mod.code.toLowerCase().includes(newSearchInput) || mod.name.toLowerCase().includes(newSearchInput)
        })

        if (newSearchInput === "") {
            setSearchResults([]);
        } else {
            setSearchResults(newSearchResults);
        }
    };

    function clearSearchInput() {
        setSearchResults([]);
        setSearchInput("");
    }

    // function handleSearchSubmit() {
    //     //
    //     console.log(searchInput);
    //     setSearchInput("")
    //     return false;
    // }

    return (
        <>
            <div className="search">
                <div className="text-field-container search-container">
                    <input className="text-field search-field"
                        onChange={handleSearchInput}
                        type="text"
                        placeholder="Search for module..."
                        value={searchInput} />
                        <button className="search-button">
                        {searchInput.length > 0 ? 
                            <CloseIcon id="clearBtn" onClick={clearSearchInput}/>
                            :
                            <SearchIcon /> 
                        }
                        </button>
                </div>
                {searchResults.length > 0 && (
                    <ul
                        className="search-result-container" 
                        name="search-results"
                        id="search-results-select"
                    >

                        {searchResults.slice(0, 10).map((result) => {
                            return (
                                <Link 
                                    className="search-result-item"
                                    to={`module-info/${result.code}`}
                                    onClick={clearSearchInput}
                                >
                                {result.name}
                                </Link>
                            )
                            })}
                    </ul>)
                }
            </div>
        </>
    )
}