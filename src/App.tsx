import React, {FC, useEffect, useState} from "react";

import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import {ConversationPage} from "./pages/ConversationPage";
import {ConversationChannelPage} from "./pages/ConversationChannelPage";
import {useAuth} from "./hooks/useAuth";
import {getUserAuth} from "./utils/api";
import {User} from "./utils/types";


function App() {
    return (
        <>
            <Routes>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/conversations" element={
                    <RequireAuth>
                        <ConversationPage/>
                    </RequireAuth>

                }>
                    <Route path=":id" element={<ConversationChannelPage/>}/>
                </Route>
            </Routes>
        </>
    );
}


type Props = {
    children: React.ReactNode;
}

const RequireAuth: FC<Props> = ({children}) => {
    // const auth = useAuth();
    const location = useLocation();
    const [user, setUser] = useState<User | undefined>();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getUserAuth()
            .then(({data}) => {
                console.log(data);
                setUser(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("error", err);
                setLoading(false);
            });


    },[]);


    if (loading){
        return <div>loading</div>
    }else{
        if (user) return <>{children}</>;
        return  <Navigate to="/login" state={{from: location}} replace/>
    }

    // if (!auth.user) {
    //     console.log(auth);
    //     return <Navigate to="/login" state={{from: location}} replace/>
    // }

}

export default App;
