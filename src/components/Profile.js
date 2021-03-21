import React, { useContext } from 'react';
import UserContext from '../context/User/UserContext';

function Profile() {
    const { selectedUser } = useContext(UserContext);
    return (
        <>
            {(selectedUser) ? <div>
                <div className="card">
                    <img src={selectedUser.avatar} alt="" className="card-img-top rounded-circle m-auto img-fluid" />
                    <div className="card-header">
                        {selectedUser.first_name} {selectedUser.last_name}
                    </div>
                    <div className="card-body">
                        {selectedUser.email}
                    </div>
                </div>
            </div>
                : <h1>No user Selected</h1>}
        </>
    )
}

export default Profile;

