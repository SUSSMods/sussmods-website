import React, { useState, useContext } from "react";
import ModuleCard from "./ModuleCard";
import PaginationBar from "./PaginationBar";
import { SavedModulesContext } from "./SavedModulesContext";
import useFetchMods from "./useFetchMods";
import { Link } from "react-router-dom";

export default function SavedModuleList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modsPerPage] = useState(10);

  // get saved mods
  const { savedMods } = useContext(SavedModulesContext);
  const params = new URLSearchParams();
  savedMods.forEach((modCode) => {
    params.append("code", modCode);
  });

  // fetch data
  const { mods, isLoading, Error } = useFetchMods(
    `https://sussmods.herokuapp.com/modules?${params.toString()}`
  );

  // get curr page mods
  const indexOfLastMod = currentPage * modsPerPage;
  const indexOfFirstMod = indexOfLastMod - modsPerPage;
  const currentMods =
    savedMods.length > 0 ? mods.slice(indexOfFirstMod, indexOfLastMod) : [];

  return (
    <>
      <div className="col-6 modules-container">
        {isLoading && <h2>Loading...</h2>}

        {Error && <h2>Error. Please try again later.</h2>}

        {currentMods.length > 0 ? (
          <>
            {currentMods.map((mod) => (
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
              totalMods={currentMods.length}
              modsPerPage={modsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              alwaysShown={true}
            />
          </>
        ) : (
          <h3>
            No modules saved yet. View available modules{" "}
            <Link to="/modules">here.</Link>
          </h3>
        )}
      </div>
    </>
  );
}
