import { useState, useEffect } from 'react';

export default function useFetchMods(url) {

    const [mods, setMods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)  
            .then(res => {
                if(!res.ok) {
                    throw Error("Unable to request data for this resource")
                }
                return res.json();
            })
            .then(data => {
                setMods(data.modules);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
                console.log(err.message)
            })
    }, [url]);
    
    return { mods, isLoading, error }
}