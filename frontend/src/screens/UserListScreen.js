import React from 'react';
import { userSigninReducer } from '../reducers/userReducers';

const UserListScreen = () => {
    return (
        <div>
            <h1>Users</h1>
            {
                loading ? (<LoadingBox></LoadingBox>)
                : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>IS SELLER</th>
                                <th>IS ADMIN</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user=>(
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isSeller ? 'YES': 'NO'}</td>
                                    <td>{user.isAdmin ? 'YES': 'NO'}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>

                                </tr>

                            ))}
                            <tr >

                            </tr>
                        </tbody>

                    </table>
                )
            }
            
        </div>
    );
}

export default UserListScreen;
