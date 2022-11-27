import React, {useEffect, useRef, useState} from 'react';
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import {LoginFormType} from "./types";

function App() {
    const [isAuth, setIsAuth] = useState<LoginFormType>({
        open: false,
        form: "login"
    })




    return (
        < >
            <Home
                isAuth={isAuth}
                setIsAuth={setIsAuth}
            />
            <Auth
                isAuth={isAuth}
                setIsAuth={setIsAuth}
            />
        </>
    );
}

export default App;
