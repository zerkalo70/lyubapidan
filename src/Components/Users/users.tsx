import React from "react";
import styles from './users.module.css'
import Women3 from "../../assets/Images/Women3.jpg";
import axios from 'axios';

class Users extends React.Component<any>{

    constructor(props: any) {
        super(props);

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => {
                    this.props.setUsers(response.data.items)
                })
    }

    getUsers = () => {
        if (this.props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: any) => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return <div>
            {/*<button onClick={this.getUsers}>getUsers</button>*/}
            {
                this.props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small: Women3} alt="iso" className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() =>
                                {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() =>
                                {this.props.follow(u.id)}}>follow</button>}
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
    }
}

export default Users;