import React, {FC} from 'react';
import "../styles/Home.css"
import {IMAGES} from "../images/index"
import {LoginFormType} from "../types";

interface Props {
    isAuth: LoginFormType
    setIsAuth: (auth: LoginFormType) => void
}

const Home: FC<Props> = ({isAuth, setIsAuth}) => {
    return (
        <div id="Home" className={`${isAuth.open ? "active" : ""}`}>
            <div className="container">
                <div className="img">
                    <img src={IMAGES.philodendron} alt="img"/>
                </div>
                <div className="text-btns">
                    <div className="btns">
                        <a href="#" className="login-btn"
                           onClick={() => setIsAuth({open: true, form: "login"})}
                        >Login</a>
                        <a
                            onClick={() => setIsAuth({open: true, form: "register"})}
                            href="#" className="register-btn">Register</a>
                    </div>
                    <small>Or Via Social Media</small>
                    <div className='via-social'>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-google"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;