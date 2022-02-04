import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

export default function SearchBar({ data }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchSubmit, setSearchSubmit] = useState(false);

  let navigate = useNavigate();

  const mods = data.map((mod) => mod.name);

  function handleSearchSubmit(e) {
    if (e.key === "Enter") {
      setSearchInput(e.target.value);
      setSearchSubmit(true);
    }
  }

  useEffect(() => {
    if (searchSubmit) {
      console.log("navigating to", searchInput);
      const searchModCode = searchInput.toUpperCase().split(" ")[0];
      navigate(`/module-info/${searchModCode}`);
      setSearchSubmit(false);
    }
  }, [searchSubmit]);

  return (
    <div className="search">
      <Autocomplete
        disablePortal
        id="search-bar"
        freeSolo
        options={mods}
        sx={{ width: 300 }}
        value={searchInput}
        onInputChange={(e, v) => setSearchInput(v)}
        renderInput={(params) => (
          <TextField
            onKeyDown={(e) => {
              handleSearchSubmit(e);
            }}
            {...params}
            label="Search for module..."
          />
        )}
      />
    </div>
  );
}