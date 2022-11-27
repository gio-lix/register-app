import React, {FC, useEffect, useRef} from 'react';
import "../styles/Auth.css"
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import {LoginFormType} from "../types";

interface Props {
    isAuth: LoginFormType
    setIsAuth: (auth: LoginFormType) => void
}

const Auth:FC<Props> = ({setIsAuth,isAuth}) => {

    return (
        <div  id="Auth" className={`${isAuth.open ? "show" : ""}`}>
            <a onClick={() => setIsAuth({...isAuth,open: false})} className="close" href="#">
                <i className="fas fa-times"></i>
            </a>
            <section className="content">
                {
                    isAuth.form === "login" &&
                    <LoginForm />
                }
                {
                    isAuth.form === "register" &&
                    <RegisterForm />
                }
            </section>
        </div>
    );
};

export default Auth;