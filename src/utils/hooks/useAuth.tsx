import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext";
import {getUserAuth} from "../api";

export function useAuth() {

    const [loading, setLoading] = useState(true);
    const {user, updateAuthUser} = useContext(AuthContext);
    const controller = new AbortController();


    useEffect(() => {
        getUserAuth()
            .then(({data}) => {
                updateAuthUser(data);
                setTimeout(() => setLoading(false), 1000);
            })
            .catch((err) => {
                console.log("error", err);
                setLoading(false);
                setTimeout(() => setLoading(false), 1000);

            });


        return () => {
            controller.abort();
        }

    }, []);

    return {user, loading};


}