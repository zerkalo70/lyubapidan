import React from "react";
import styles from './users.module.css'
import Women3 from "../../assets/Images/Women3.jpg";
import axios from 'axios';

const Users = (props: any) => {

    let getUsers = () => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response: any) => {
                props.setUsers(response.data.items)
            })

    // props.setUsers([{id: 1, photoUrl: Women1, followed: true, fullName: 'Люба', status: 'I am a BOSS',
    //     location: {city: 'Chekhov', country: 'Russia'}},
    //     {id: 2, photoUrl: Women2, followed: false, fullName: 'Маша', status: 'I am a BOSS',
    //         location: {city: 'Chekhov', country: 'Russia'}},
    //     {id: 3, photoUrl: Women3, followed: true, fullName: 'Даша', status: 'I am a BOSS',
    //         location: {city: 'Chekhov', country: 'Russia'}},])
    }
    }
    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small: Women3} alt="iso" className={styles.userPhoto}/>
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
};

export default Users;