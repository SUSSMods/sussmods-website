import Modal from "react-modal";
import FilterAccordion from "./FilterAccordion";

Modal.setAppElement(document.getElementById("root"));

function FilterModal(props) {
  //TODO: move styles into css
  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "90%",
    },
  };

  return (
    <Modal id="filter-modal" isOpen={props.modalIsOpen} style={modalStyles}>
      <FilterAccordion />
      <button className="btn secondary-btn btn-vr-icon" onClick={() => {}}>
        Clear Filters
      </button>
      <button
        className="btn primary-btn btn-vr-icon"
        onClick={props.closeModal}
      >
        Apply & Close
      </button>
    </Modal>
  );
}

export default FilterModal;