import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./user";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}: any) => {

    return (
        <div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {
                    users.map((u: any) => <User user={u}
                                                followingInProgress={props.followingInProgress}
                                                key={u.id}
                                                unfollow={props.unfollow}
                                                follow={props.follow}/>)
                }
            </div>
        </div>
    )
}

export default Users;