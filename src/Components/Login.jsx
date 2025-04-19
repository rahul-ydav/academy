import { useState } from 'react'

function Login(){

    return (<>
        <form id="login">
            <label>Login: </label>
            <input type="text"></input>
            <label>Password: </label>
            <input type="password"></input>
        </form>
    </>);
}

export default Login;
