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
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;