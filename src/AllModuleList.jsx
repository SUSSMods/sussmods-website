import React, { useState } from 'react';
import ModuleCard from './ModuleCard';
import PaginationBar from './PaginationBar'
// import useFetch from './useFetch'
// import useFetchMods from './useFetchMods'
import data from './data';

export default function AllModuleList() {

    const [currentPage, setCurrentPage] = useState(1);
    const [modsPerPage] = useState(10);

    // const { mods, isLoading, Error } = useFetchMods('https://sussmods.herokuapp.com/')

    const mods = data["modules"]
    
    // get curr page mods
    const indexOfLastMod = currentPage * modsPerPage;
    const indexOfFirstMod = indexOfLastMod - modsPerPage;
    
    const currentMods = mods.slice(indexOfFirstMod, indexOfLastMod)
    
    return (
        <>
            <div className="col-6 modules-container">

                {/* {isLoading && 
                <h2>Loading...</h2>
                }

                {Error && 
                <h2>Error. Please try again later.</h2>
                } */}

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
