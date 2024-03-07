import {useEffect, useState} from "react";
import {getUserAuth} from "../utils/api";
import {User} from "../utils/types";

export function useAuth() {
    const [user, setUser] = useState<User | undefined>();

    const [loading, setLoading] = useState(false);

    const controller = new AbortController();

    useEffect(() => {
        setLoading(true)
        getUserAuth()
            .then(({data}) => {
                console.log(data);
                setUser(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);

            });

        return () => {
            controller.abort();
        };
    }, [user,loading]);

    return {user, loading};

}