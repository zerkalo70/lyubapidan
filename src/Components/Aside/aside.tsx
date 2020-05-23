import React from "react";
import s from "./aside.module.css";

function Aside() {
    return (
        <aside>
            <nav>
                <ul className={s.nav}>
                    <li><a>Профиль</a></li>
                    <li><a>Сообщения</a></li>
                    <li><a>Новости</a></li>
                    <li><a>Музыка</a></li>
                    <li><a>Настройки</a></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Aside