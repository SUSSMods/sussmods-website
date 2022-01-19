import React, { useState } from 'react'
import AllModuleList from './AllModuleList'
import ModuleInfo from './ModuleInfo'   
import SavedModuleList from './SavedModuleList'
import FilterAccordion from './FilterAccordion'
import { Routes, Route } from 'react-router-dom';
// import { SavedModulesContext } from './SavedModulesContext';
import SavedModulesProvider from './SavedModulesContext';

function MainContent() {

    const [savedMods, setSavedMods] = useState([]);

    return (
        <section className="row main">
            <SavedModulesProvider value={{savedMods, setSavedMods}}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <AllModuleList />
                            <FilterAccordion />
                        </>
                    } />
                    <Route path="/modules" element={
                        <>
                            <AllModuleList />
                            <FilterAccordion />
                        </>
                    } />
                    <Route path="/module-info/:modCode" element={<ModuleInfo />} />
                    <Route path="/saved-modules" element={<SavedModuleList />} />
                </Routes>
            </SavedModulesProvider>
        </section>
    )
}

export default MainContent