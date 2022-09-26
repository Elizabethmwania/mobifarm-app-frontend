import React from 'react';
import { useState } from 'react';
import Login from './Login'

const LoginAuth = () => {
    const [token, setToken] = useState ();

    if(!token) {
        return <Login setToken = {setToken} />
    }
    return (
        <div>
            
        </div>
    );
};

export default LoginAuth;