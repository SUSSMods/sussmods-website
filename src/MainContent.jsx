import AllModuleList from "./AllModuleList";
import ModuleInfo from "./ModuleInfo";
import SavedModuleList from "./SavedModuleList";
import FilterAccordion from "./FilterAccordion";
import { Routes, Route } from "react-router-dom";
import SavedModulesProvider from "./SavedModulesContext";
import FiltersProvider from "./FiltersContext";

function MainContent() {
  return (
    <section className="row main">
      <SavedModulesProvider>
        <FiltersProvider>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AllModuleList />
                  <FilterAccordion />
                </>
              }
            />
            <Route
              path="/modules"
              element={
                <>
                  <AllModuleList />
                  <FilterAccordion />
                </>
              }
            />
            <Route path="/module-info/:modCode" element={<ModuleInfo />} />
            <Route path="/saved-modules" element={<SavedModuleList />} />
          </Routes>
        </FiltersProvider>
      </SavedModulesProvider>
    </section>
  );
}

export default MainContent;
