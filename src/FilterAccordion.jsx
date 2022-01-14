import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import FilterOption from './FilterOption'

import filters from './filters'

export default function FilterAccordion() {

    return (
        <>
            <div className="col-2 filter-container">
                <div className="accordion">
                    <div id="filter-main-header">
                        <h4>Filter by:</h4>
                        <a href='#!' className="text-body text-bold">Clear filters</a>
                    </div>
                    {filters.map((filter) => (
                        <Accordion defaultActiveKey={filter.id} 
                                    key={filter.id}
                                    className="filter-accordion"
                                    >
                            <Accordion.Item eventKey={filter.id}>
                                <Accordion.Header className="accordion-header">{filter.header}</Accordion.Header>
                                <Accordion.Body>

                                    {filter.options.map((option) => (
                                        <FilterOption
                                            key={option.id}
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
