import { Link, useParams } from 'react-router-dom';
import ModuleMainInfo from './ModuleMainInfo';
import ModuleSideInfo from './ModuleSideInfo';
import SaveBtn from './SaveBtn';
import { useState, useEffect } from 'react';

function ModuleInfo() {

  // get mod code to request data for
  const { modCode } = useParams();
  const url = `https://sussmods.herokuapp.com/module-info/${modCode}`

  const [modInfo, setmodInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showSaveMsg, setShowSaveMsg] = useState(false);

  // const { savedMods } = useContext(SavedModulesContext);

  useEffect(() => {
    fetch(url)  
          .then(res => {
              if(!res.ok) {
                  throw new Error("Unable to request data for this resource");
              }
              return res.json();
          })
          .then(data => {
              if (data.length < 1)  {
                throw new Error("Module not found");
              } else {
                setmodInfo(data["mod_info"]);
                setError(null);
                setIsLoading(false);
              }
          })
          .catch(err => {
            setError(err.message);
            setIsLoading(false);
          })
          return { modInfo, isLoading, error }
  }, [url]);
  
  return (
    <>
      {isLoading &&
        <h2>Loading...</h2>
      }

      {error &&
        <h2>Module not found</h2>
      }

      {!isLoading && !error &&
        <>
          <ModuleMainInfo
          modName={modInfo.name}
          modCode={modInfo.code}
          modDesc={modInfo.desc}
          modTopics={modInfo.topics}
          modOutcomes={modInfo.learningOutcomes}
          modTextbook={modInfo.textbook}
          /> 

          <div className="col-2 module-info-side">
          
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

          {showSaveMsg &&
          <small className="saved-removed-text">{modCode} has been saved. View saved modules <Link to='/saved-modules'>here.</Link></small>
          }
        </div>
        
      </>
      }
    </>
    )
};

export default ModuleInfo;