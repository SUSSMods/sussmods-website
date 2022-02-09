import React, { useContext } from "react";
import FilterOption from "./FilterOption";
import { FiltersContext } from "./FiltersContext";
import { camelCase } from "lodash";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

import filters from "./filters";

// TODO: move to separate components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:last-child": {
    borderRadius: "0px 0px 8px 8px",
  },
  "&:before": {
    display: "none",
  },
  "& .Mui-expanded": {
    backgroundColor: "#c5dcfa",
    color: "#003b5c",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    fontSize: "1rem",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function FilterAccordion(props) {
  const { dispatch } = useContext(FiltersContext);

  const filterContainerClass = !props.isMobile
    ? "col-2 filter-container"
    : "mobile-filter-container";

  return (
    <div className={filterContainerClass}>
      {!props.isMobile && (
        <div id="filter-main-header">
          <h4 id="filter-accordion-main-label">Filter by:</h4>
          <h4
            onClick={() => dispatch({ type: "CLEAR_FILTERS", filterItem: {} })}
            id="clear-filters-label"
            className="text-body text-bold"
          >
            Clear filters
          </h4>
        </div>
      )}

      {filters.map((filterItem) => (
        <Accordion key={filterItem.id} defaultExpanded>
          <AccordionSummary>{filterItem.header}</AccordionSummary>

          <AccordionDetails>
            {filterItem.options.map((option) => (
              <FilterOption
                key={`${filterItem.id}${option.id}`}
                id={`${filterItem.id}${option.id}`}
                filterHeader={camelCase(filterItem.header)}
                optionName={option.name}
              />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
