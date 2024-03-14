import React, {FC} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../../utils/hooks/useAuth";


type Props = {
    children: React.ReactNode;
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