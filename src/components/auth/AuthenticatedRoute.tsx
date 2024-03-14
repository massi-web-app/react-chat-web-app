import React, {FC, useEffect, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {User} from "../../utils/types";
import {getUserAuth} from "../../utils/api";


type Props = {
    children: React.ReactNode;
}


function useAuth() {

    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(true);

    const controller = new AbortController();


    useEffect(() => {
        getUserAuth()
            .then(({data}) => {
                console.log(data);
                setUser(data);
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

export const AuthenticatedRoute: FC<Props> = ({children}) => {
    // const auth = useAuth();
    const location = useLocation();

    const {user, loading} = useAuth();

    if (loading) {
        return <div>loading</div>
    }
    if (user) return <>{children}</>;
    return <Navigate to="/login" state={{from: location}} replace/>
}