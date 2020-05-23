import LogoF1 from "./Images/LogoF1.png";
import React from "react";
import s from "./header.module.css"

function Header() {
    return (
        <header>
            <div>
                <img className={s.headerImg} src={LogoF1} alt="iso"/>
            </div>
        </header>
    )
}

export default Header;