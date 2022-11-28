import React, { useEffect, useState} from "react";
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile } from "react-device-detect";
import { get_token_url } from "../data/urls";

import "../index.css";

async function loginUser(credentials) {
    return fetch( get_token_url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({setToken}) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setLogin] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser({
            username,
            password
        });

        setToken(data.result.token);
        setLogin(true)
    }

    if(isLoggedIn){
        return <Redirect to='/' />
    }

    return (
        <React.StrictMode>
            <div className='learners-chat-container col-6 place-0'>
                <h1>Login</h1>
                <div className='login-container'>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <p>Username</p>
                            <input type="text" onChange={e => setUserName(e.target.value)}/>
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" onChange={e => setPassword(e.target.value)}/>
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.StrictMode>
    )

}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}