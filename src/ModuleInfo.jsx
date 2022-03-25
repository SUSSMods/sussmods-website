import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { NavTitlesContext } from "./NavTitlesContext";
import ModuleMainInfo from "./ModuleMainInfo";
import ModuleSideInfo from "./ModuleSideInfo";
import SaveBtn from "./SaveBtn";

export default function ModuleInfo() {
  // get mod code for GET request to API
  const { modCode } = useParams();
  const url = `https://sussmods.herokuapp.com/module-info/${modCode}`;

  const [modInfo, setmodInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showSaveMsg, setShowSaveMsg] = useState(false);

  const { navTitles, setNavTitles } = useContext(NavTitlesContext);

  //TODO: Remove duplication with react-responsive
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1045;

  // fetch mod info
  // TODO: replace mod_info with camel case
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Unable to request data for this resource");
        }
        if (isMounted) {
          const data = await res.json();
          if (data.mod_info === null) {
            throw Error("Module not found");
          }
          //WARNING: DO NOT CHANGE ORDER OF STATE UPDATES
          setmodInfo(data.mod_info);
          setError(null);
          setIsLoading(false);
        }
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  // update title in context
  useEffect(() => {
    setNavTitles({
      ...navTitles,
      subTitle: modCode,
    });
  }, [modCode]);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      {error && <h2>Module not found</h2>}

      {isLoading && <h2>Loading...</h2>}

      {!isLoading && !error && width > breakpoint && (
        <>
          <div className="col-md-6 module-detail-container">
            <h1 className="module-detail-title">{modInfo.name}</h1>

            <ModuleMainInfo
              // modName={modInfo.name}
              modCode={modInfo.code}
              modDesc={modInfo.desc}
              modTopics={modInfo.topics}
              modOutcomes={modInfo.learningOutcomes}
              modTextbook={modInfo.textbook}
            />
          </div>

          <div className="col-md-2 module-info-side">
            <ModuleSideInfo
              modCu={modInfo.cu}
              modSem={modInfo.sem}
              modLevel={modInfo.level}
              modPrereqs={modInfo.prerequisites}
              modLang={modInfo.language}
              modTimeTable={modInfo.timeTable}
            />

            <SaveBtn
              modCode={modCode}
              setShowSaveMsg={setShowSaveMsg}
              btnSize="wide"
            />

            {showSaveMsg && (
              <small className="saved-removed-text">
                {modCode} has been saved. View saved modules{" "}
                <Link to="/saved-modules">here.</Link>
              </small>
            )}
          </div>
        </>
      )}

      {!isLoading && !error && width <= breakpoint && (
        <>
          <div className="col-md-6 module-detail-container">
            <h1 className="module-detail-title">{modInfo.name}</h1>

            <ModuleSideInfo
              modCu={modInfo.cu}
              modSem={modInfo.sem}
              modLevel={modInfo.level}
              modPrereqs={modInfo.prerequisites}
              modLang={modInfo.language}
              modTimeTable={modInfo.timeTable}
            />

            <ModuleMainInfo
              // modName={modInfo.name}
              modCode={modInfo.code}
              modDesc={modInfo.desc}
              modTopics={modInfo.topics}
              modOutcomes={modInfo.learningOutcomes}
              modTextbook={modInfo.textbook}
            />

            <SaveBtn
              modCode={modCode}
              setShowSaveMsg={setShowSaveMsg}
              btnSize="wide"
            />

            {showSaveMsg && (
              <small className="saved-removed-text">
                {modCode} has been saved. View saved modules{" "}
                <Link to="/saved-modules">here.</Link>
              </small>
            )}
          </div>
        </>
      )}
    </>
  );
}
