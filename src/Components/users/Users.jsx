import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData()
    const [users , serUsers] = useState(loadedUser)
    return (
        <div>
            <h1>users {users.length}</h1>
        </div>
    );
};

export default Users;