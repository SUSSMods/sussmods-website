import { useState, useEffect } from 'react';

export default function useFetch(url) {

    const [data, setData] = useState([]);
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
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);
                console.log(err.message)
            })
    }, [url]);
    
    return { data, isLoading, error }
}