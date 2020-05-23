import LogoF2 from "./Images/LogoF2.jpg";
import React from "react";
import s from "./main.module.css";

function Main() {
    return (
        <main>
            <div>
                <img className={s.main} src={LogoF2} alt="iso"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </main>
    )
}

export default Main;