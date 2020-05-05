import React, {useState, useEffect} from 'react';
import axios from 'axios';

import getResources from './getResources';

const UserList = () => {
    // const {resource} = props;
    const users = getResources('users');

    return (
        <ul>
            {users.map(oneUser => (
                <li key={oneUser.id}>{oneUser.name}</li>
            ))}
        </ul>
    );
}

export default UserList;