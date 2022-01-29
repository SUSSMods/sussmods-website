import React, { useState, useContext } from 'react';
import ModuleCard from './ModuleCard';
import PaginationBar from './PaginationBar';
import useFetchMods from './useFetchMods';
import { FiltersContext } from './FiltersContext';

export default function AllModuleList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [modsPerPage] = useState(10);
    const { filters } = useContext(FiltersContext);

    const { mods, isLoading, Error } = useFetchMods('https://sussmods.herokuapp.com/')
    
    // get curr page mods
    const indexOfLastMod = currentPage * modsPerPage;
    const indexOfFirstMod = indexOfLastMod - modsPerPage;
    
    // TODO: Refactor for dynamic filter headers
    // const consolidateFilters = () => {
    //     return Object.assign({}, ...(filters.map(f => ({ [f.header]: f.option }) )))
    // }

    // const finalFilters = filters.length > 0 ? consolidateFilters() : filters;
    // console.log('final', finalFilters);
    // console.log(finalFilters.semOffered);
    // const filteredMods = filters.length > 0 ?
    //     mods
    //     .filter(mod => finalFilters.semOffered.includes(mod.sem))
    //     .filter(mod => finalFilters.creditUnits.includes(mod.cu))
    //     : mods

    // const currentMods = filteredMods.slice(indexOfFirstMod, indexOfLastMod)
    const currentMods = mods.slice(indexOfFirstMod, indexOfLastMod)
    
    return (
        <>
            <div className="col-6 modules-container">

                {isLoading && 
                <h2>Loading...</h2>
                }

                {Error && 
                <h2>Error. Please try again later.</h2>
                }

                 {   currentMods.map(mod => (
                        <ModuleCard
                        key={mod.id}
                        modCode={mod.code}
                        modName={mod.name}
                        modCu={mod.cu}
                        modSem={mod.sem}
                        modDesc={mod.desc}
                    />
                    ))}
                
                <PaginationBar 
                totalMods={mods.length} 
                modsPerPage={modsPerPage} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                alwaysShown={true}
                />

            </div>


        </>
    )
}
