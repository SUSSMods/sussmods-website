import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import FilterModal from "./FilterModal";

function MobileFilterButton(props) {

  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const openModal = () => {
    setFilterModalIsOpen(true);
  };

  const closeModal = () => {
    setFilterModalIsOpen(false);
  };

  return (
    <>
      <Fab
        id="mobile-filter-fab"
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <FilterAltIcon sx={{ mr: 0.5 }} />
        Filters
      </Fab>

      <FilterModal 
      modalIsOpen={filterModalIsOpen}
      closeModal={closeModal} />

    </>
  );
}

export default MobileFilterButton;