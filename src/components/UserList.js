import React, { useEffect, useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {
    const { getUsers, users, getProfile } = useContext(UserContext)
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div className="list-group h-100">
            <div className="row">
                <div className="col">
                    {
                        users.map(user => (
                            <a onClick={() => getProfile(user.id)} className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!" key={user.id}>
                                <img src={user.avatar} alt="" className="img-fluid mr-4 rounded-circle" width="70" />
                                <p>{user.first_name} {user.last_name}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default UserList;
