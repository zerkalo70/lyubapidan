import React from "react";
import s from "./nav.module.css";

function Nav() {
    return (
            <div className={s.nav}>
                <ul>
                    <li><a>Профиль</a></li>
                    <li><a>Сообщения</a></li>
                    <li><a>Новости</a></li>
                    <li><a>Музыка</a></li>
                    <li><a>Настройки</a></li>
                </ul>
            </div>
    )
}

export default Nav