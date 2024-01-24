import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);
    const [loading, setLoading] = useState(false);

    const httpConfig = (method, data) => {
        if(method==="POST"){
            setConfig([url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }]);
        }else if(method === "DELETE"){
            setConfig([url+`/${data}`, {
                method,
            }]);
        }
        setMethod(method);
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let json
            try{
                const res = await fetch(url);
                json = await res.json();
                console.log(json)
            }catch(e){
                console.log(e.message);
            }
            setData(json)
            setLoading(false);
        }

        fetchData();
    },[url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            let json

            if(method == "POST"){
                const res = await fetch(...config);
                json = await res.json();
            }else if(method === "DELETE"){
                const res = await fetch(...config);
                json = await res.json();
            }

            setCallFetch(json);
        }

        httpRequest();
    }, [config, url, method]);

    return { data, httpConfig, loading};
}