// submitHandler = (event) =>{
//     // window.fetch()
//     console.log("I am pressed, ",event);
// }

function Login(){

    return (<>
        <form id="login">
            <h3>Login</h3>
            <div id="loginDiv">
                <label>Email: </label>
                <input autoFocus type="email" placeholder='email'></input>
                <label>Password: </label>
                <input type="password" placeholder='password'></input>
            <submit style={{backgroundColor: 'blue', width: '100%', marginTop:'5px', borderRadius: '.2rem'}}>Login</submit>
            </div>
        </form>
    </>);
}

export default Login;
