import { useState, useEffect } from "react";

const AbortController = window.AbortController;


export const useFetchApi = (resouce = "", method = "GET",options = {}) => {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    // const controller = new AbortController();

    const startFetch = async (password, username) => {
        setIsFetching(true);
        setError(null);
        setData(null);
        setResponse(null);


        try {
            const response = await fetch(resouce, {
                method,
                mode: 'no-cors',
                body: `<serviceRequest serviceName="MobileLoginSP.login">
                <requestBody>
                  <NOMUSU>${username}</NOMUSU>
                  <INTERNO>${password}</INTERNO>
                </requestBody>
              </serviceRequest>`,
                headers: {
                     "Content-Type": "text/xml;charset=ISO-8859-1"
                },
                credentials: "include",
                ...options,
            });
            console.log(response)
            
            setResponse(response);
            setData(response);
        } catch (err) {
            setError(err);
        } finally {
            setIsFetching(false);
        }
    };

    // const cancelFetch = () => controller.abort();

    // useEffect(() => {
    //     return () => {
    //         controller.abort();
    //     };
    // }, []);

    return {
        isFetching,
        data,
        response,
        error,
        startFetch,
        // cancelFetch,
    };
};