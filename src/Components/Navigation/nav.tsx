import React from "react";
import s from "./nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
            <div className={s.nav}>
                <ul className={s.item}>
                    <li>
                        <NavLink to = {"/profile"} activeClassName={s.active}>
                            Профиль</NavLink>
                    </li>
                    <li>
                        <NavLink to = {"/dialogs"} activeClassName={s.active}>
                            Сообщения</NavLink>
                    </li>
                    <li>
                        <NavLink to = {"/users"} activeClassName={s.active}>
                            Пользователи</NavLink>
                    </li>
                    <li>
                        <a>Музыка</a>
                    </li>
                    <li>
                        <a>Настройки</a>
                    </li>
                </ul>
            </div>
    )
}

export default Nav