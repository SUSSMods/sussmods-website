import { Link, useParams } from 'react-router-dom';
import ModuleMainInfo from './ModuleMainInfo';
import ModuleSideInfo from './ModuleSideInfo';
import SaveBtn from './SaveBtn';
import { useState, useEffect } from 'react';

function ModuleInfo() {

  // get mod code to request data for
  const { modCode } = useParams();
  const url = `http://localhost:8000/module-info?code=${modCode}`

  const [data, setData] = useState([]);
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
                setData(data);
                setError(null);
                setIsLoading(false);
              }
          })
          .catch(err => {
            setError(err.message);
            setIsLoading(false);
          })
          return { data, isLoading, error }
  }, [url]);
  
  const [mod] = data;

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
          modName={mod.name}
          modCode={mod.code}
          modDesc={mod.desc}
          modTopics={mod.topics}
          modOutcomes={mod.learningOutcomes}
          modTextbook={mod.textbook}
          /> 

          <div className="col-2 module-info-side">
          
            <ModuleSideInfo
            modCu={mod.cu}
            modSem={mod.sem}
            modLevel={mod.level}
            modPrereqs={mod.prerequisites}
            modLang={mod.language}
            modTimeTable={mod.timeTable}
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