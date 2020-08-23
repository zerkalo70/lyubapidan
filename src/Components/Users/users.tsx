import React from "react";
import styles from "./users.module.css";
import Women3 from "../../assets/Images/Women3.jpg";
import {NavLink} from "react-router-dom";


let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : styles.Page}
                              onClick={(e) => {
                                  props.onPageChanged(p);
                              }}>
                            {p}</span>

                })}
            </div>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : Women3} alt="iso"
                                 className={styles.userPhoto}/>
                                 </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some((id: any) => id === u.id)}
                                          onClick={() => {props.unfollow(u.id);}}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id: any) => id === u.id)}
                                          onClick={() => {props.follow(u.id);}}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;