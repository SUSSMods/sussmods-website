import React, { useState } from "react";
import Modal from "react-modal";
import Fab from "@mui/material/Fab";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAccordion from "./FilterAccordion";

Modal.setAppElement(document.getElementById("root"));

function MobileFilterButton(props) {

  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => {
    setFilterModalIsOpen(true);
  };

  const closeModal = () => {
    setFilterModalIsOpen(false);
  };

  return (
    <>
      <Fab
        className="mobile-filter-fab"
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <FilterAltIcon sx={{ mr: 1 }} />
        Filters
      </Fab>

      <Modal isOpen={filterModalIsOpen} style={modalStyles}>
        <h2>Test Modal</h2>
        <FilterAccordion />
        <button onClick={closeModal}>X</button>
      </Modal>
    </>
  );
}

export default MobileFilterButton;
