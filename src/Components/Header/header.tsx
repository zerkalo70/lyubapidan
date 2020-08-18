import LogoF1 from "./Images/LogoF1.png";
import React from "react";
import s from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header: any = (props: any) => {
    return (
        <header>
            <div>
                <img className={s.headerImg} src={LogoF1} alt="iso"/>
                <div className={s.loginBlock}>
                    {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;