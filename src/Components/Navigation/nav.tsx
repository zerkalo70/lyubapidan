import React from "react";
import s from "./nav.module.css";

const Nav = () => {
    return (
            <div className={s.nav}>
                <ul className={s.item}>
                    <li>
                        <a>Профиль</a>
                    </li>
                    <li>
                        <a >Сообщения</a>
                    </li>
                    <li>
                        <a>Новости</a>
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