import React from "react";
import styles from "./users.module.css";
import Women3 from "../../assets/Images/Women3.jpg";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}: any) => {

    return (
        <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : Women3} alt="iso"
                                 className={styles.userPhoto}/>
                                 </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some((id: any) => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id);
                                          }}>Unfollow</button>
                                : <button disabled={followingInProgress.some((id: any) => id === user.id)}
                                          onClick={() => {
                                              follow(user.id);
                                          }}>follow</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </span>
                    </span>
        </div>

    )
}

export default User;