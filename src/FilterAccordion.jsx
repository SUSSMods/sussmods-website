import React, { useContext } from 'react'
import Accordion from 'react-bootstrap/Accordion'
// import Accordion from '@mui/material/Accordion'
import FilterOption from './FilterOption'
import { FiltersContext } from './FiltersContext'
import { camelCase } from 'lodash';

// TODO: Replace with api call to generate filters
import filters from './filters'

export default function FilterAccordion() {

    const { dispatch } = useContext(FiltersContext);

    return (
        <>
            <div className="col-2 filter-container">
                <div className="accordion">
                    <div id="filter-main-header">
                        <h4>Filter by:</h4>
                        <h4 
                        onClick={() => dispatch({type: 'CLEAR_FILTERS', filterItem: {}})}
                        id="clear-filters-btn"
                        className="text-body text-bold">Clear filters</h4>
                    </div>
                    {filters.map((filterItem) => (
                        <Accordion defaultActiveKey={filterItem.id} 
                                    key={filterItem.id}
                                    className="filter-accordion"
                                    >
                            <Accordion.Item eventKey={filterItem.id}>
                                <Accordion.Header className="accordion-header">{filterItem.header}</Accordion.Header>
                                <Accordion.Body>

                                    {filterItem.options.map((option) => (
                                        <FilterOption
                                            key={`${filterItem.id}${option.id}`}
                                            id={`${filterItem.id}${option.id}`}
                                            filterHeader={camelCase(filterItem.header)}
                                            optionName={option.name}
                                            optionClass={option.class}
                                        />
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item >
                        </Accordion>
                    ))}
                </div>
            </div>
        </>
    );
}
