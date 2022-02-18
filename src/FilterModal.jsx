import Modal from "react-modal";
import FilterAccordion from "./FilterAccordion";

Modal.setAppElement(document.getElementById("root"));

function FilterModal(props) {

  return (
    <Modal id="filter-modal" isOpen={props.modalIsOpen}>
      <FilterAccordion isMobile={true} />
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