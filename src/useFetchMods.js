import { useState, useEffect } from 'react';

export default function useFetchMods(url) {

    const [mods, setMods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // prevent set state when unmounted warning
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw Error("Unable to request data for this resource")
                } 
                if (isMounted) {
                    const data = await res.json();
                    setMods(data.modules);
                    setIsLoading(false);
                    setError(null);
                }
            } catch (err) {
                setIsLoading(false);
                setError(err.message);
                console.log(err.message);
            }
        };
        
        fetchData();
        // clean up to prevent fetching after navigating away from mod list
        return () => {
            isMounted = false;
        }
    }, [url])
    
    return { mods, isLoading, error }
}