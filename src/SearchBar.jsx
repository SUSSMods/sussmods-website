import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField  } from "@mui/material"    

//TODO: Enforce controlled inputs thru states
export default function SearchBar({ data }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let navigate = useNavigate();

  const mods = data.map(mod => mod.name);

  function handleSearchInput(e) {
    const newSearchInput = e.target.value.toLowerCase();
    setSearchInput(newSearchInput);
  }


  function clearSearchInput() {
    setSearchResults([]);
    setSearchInput("");
  }

  function handleSearchSubmit(e) {
      //TODO: Change logic for detecting 
      if(e.key === "Enter") {
          const searchMod = e.target.value;
          const searchModCode = searchMod.split(" ")[0];
          console.log(searchModCode);
          //FIXME: Update NavContext on redirect
          navigate(`/module-info/${searchModCode}`) 
      }
  }

  return (
    <div className="search">
      <Autocomplete
        disablePortal
        id="search-bar"
        freeSolo
        options={mods}
        sx={{ width: 300 }}
        renderInput={(params) => 
            <TextField 
            onChange={handleSearchInput}
            onKeyDown={e => {
                handleSearchSubmit(e)
                clearSearchInput()      
            }}
            {...params} 
            label="Search for module..." />}
      />
    </div>

    // <>
    //     <div className="search">
    //         <div className="text-field-container search-container">
    //             <input className="text-field search-field"
    //                 onChange={handleSearchInput}
    //                 type="text"
    //                 placeholder="Search for module..."
    //                 value={searchInput} />
    //                 <button className="search-button">
    //                 {searchInput.length > 0 ?
    //                     <CloseIcon id="clearBtn" onClick={clearSearchInput}/>
    //                     :
    //                     <SearchIcon />
    //                 }
    //                 </button>
    //         </div>
    //         {searchResults.length > 0 && (
    //             <ul
    //                 className="search-result-container"
    //                 name="search-results"
    //                 id="search-results-select"
    //             >

    //                 {searchResults.slice(0, 10).map((result) => {
    //                     return (
    //                         <Link
    //                             className="search-result-item"
    //                             to={`module-info/${result.code}`}
    //                             onClick={clearSearchInput}
    //                         >
    //                         {result.name}
    //                         </Link>
    //                     )
    //                     })}
    //             </ul>)
    //         }
    //     </div>
    // </>
  );
}
