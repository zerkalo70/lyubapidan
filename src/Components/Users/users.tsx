import React from "react";
import styles from './users.module.css'
import Women1 from "../Images/Women1.jpg";
import Women2 from "../Images/Women2.jpg";
import Women3 from "../Images/Women3.jpg";

const Users = (props: any) => {
    if (props.users.length === 0) {
    props.setUsers([{id: 1, photoUrl: Women1, followed: true, fullName: 'Люба', status: 'I am a BOSS',
        location: {city: 'Chekhov', country: 'Russia'}},
        {id: 2, photoUrl: Women2, followed: false, fullName: 'Маша', status: 'I am a BOSS',
            location: {city: 'Chekhov', country: 'Russia'}},
        {id: 3, photoUrl: Women3, followed: true, fullName: 'Даша', status: 'I am a BOSS',
            location: {city: 'Chekhov', country: 'Russia'}},])
    }
    return (
        <div>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="iso" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() =>
                                {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() =>
                                {props.follow(u.id)}}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;