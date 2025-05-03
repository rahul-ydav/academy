import {useForm} from 'react-hook-form';
import BACKEND_POINT from '../../BackendPoint';

function Login(){

    const onSubmit = async(data) => {
        console.log("I am pressed, ",data);
        let res = await window.fetch(`${BACKEND_POINT}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await res.json();
        if (result.message === 'FrontPage') {
            window.location.href = '/FrontPage';
        }
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        
    });

    return (<section className='section'>
        <form id="login" onSubmit={handleSubmit(onSubmit)}>
            <h3>Login</h3>
            <div id="loginDiv">
                <label>Email: </label>
                <input autoFocus type="email" placeholder='email' {...register("email")}></input>
                <label>Password: </label>
                <input type="password" placeholder='password' {...register("password", {maxLength: {value: 10, message: "Password can be at max length 8"}})}></input>
                {errors.password && <p>{errors.password.message}</p>}
                <input type="submit" style={{backgroundColor: 'blue', width: '100%', marginTop:'5px', borderRadius: '.2rem'}}></input>
            </div>
        </form>
    </section>);
}

export default Login;
