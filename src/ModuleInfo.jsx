import { Link, useParams } from "react-router-dom";
import ModuleMainInfo from "./ModuleMainInfo";
import ModuleSideInfo from "./ModuleSideInfo";
import SaveBtn from "./SaveBtn";
import { useState, useEffect } from "react";
import data from "./data";

function ModuleInfo() {
  // get mod code to request data for
  // const { modCode } = useParams();
  // const url = `https://sussmods.herokuapp.com/module-info/${modCode}`

  // const [modInfo, setmodInfo] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  const [showSaveMsg, setShowSaveMsg] = useState(false);

  const modInfo = data["module-info"][0];
  const modCode = data["module-info"][0]["code"];

  // useEffect(() => {
  //   let isMounted = true;
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(url);
  //       if (!res.ok) {
  //         throw Error("Unable to request data for this resource");
  //       }
  //       if (isMounted) {
  //         const data = await res.json();
  //         if (data.length < 1) {
  //           throw Error("Module not found");
  //         }
  //         setmodInfo(data.mod_info);
  //         setIsLoading(false);
  //         setError(null);
  //       }
  //     } catch(err) {
  //       setIsLoading(false);
  //       setError(err.message);
  //       console.log(err.message);
  //     }
  //   };

  //   fetchData();
  //   return () => {
  //     isMounted = false;
  //   }
  // }, [url])

  return (
    <>
      {/* {isLoading &&
        <h2>Loading...</h2>
      }

      {error &&
        <h2>Module not found</h2>
      } */}

      {/* {!isLoading && !error && */}
      <>
        <ModuleMainInfo
          modName={modInfo.name}
          modCode={modInfo.code}
          modDesc={modInfo.desc}
          modTopics={modInfo.topics}
          modOutcomes={modInfo.learningOutcomes}
          modTextbook={modInfo.textbook}
        />

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
      {/* } */}
    </>
  );
}

export default ModuleInfo;
