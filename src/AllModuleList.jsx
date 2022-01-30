import React, { useState, useContext, useEffect } from "react";
import ModuleCard from "./ModuleCard";
import PaginationBar from "./PaginationBar";
import useFetchMods from "./useFetchMods";
import { FiltersContext } from "./FiltersContext";
import { NavTitlesContext } from "./NavTitlesContext";

export default function AllModuleList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modsPerPage] = useState(10);
  const { filters } = useContext(FiltersContext);

  const { mods, isLoading, Error } = useFetchMods(
    "https://sussmods.herokuapp.com/"
  );

  // get curr page mods
  const indexOfLastMod = currentPage * modsPerPage;
  const indexOfFirstMod = indexOfLastMod - modsPerPage;

  // apply filters
  const filteredMods = mods
    .filter((mod) => filters.semOffered.includes(mod.sem.toLowerCase()))
    .filter((mod) => filters.creditUnits.includes(mod.cu.toString()));

  const currentPageMods = filteredMods.slice(indexOfFirstMod, indexOfLastMod);

  const { setNavTitles } = useContext(NavTitlesContext);

  useEffect(() => {
    setNavTitles({
      mainTitle: "All Modules",
      subTitle: null,
    });
  }, []);

  return (
    <>
      <div className="col-6 modules-container">
        {isLoading && <h2>Loading...</h2>}

        {Error && <h2>Error. Please try again later.</h2>}

        {currentPageMods.map((mod) => (
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
          totalMods={filteredMods.length}
          modsPerPage={modsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          alwaysShown={true}
        />
      </div>
    </>
  );
}
