import {useForm} from 'react-hook-form';
import BACKEND_POINT from '../../BackendPoint';
import { useNavigate } from 'react-router-dom';
import {loginAPI} from './../apis/login.js';

function Login(){
    const navigate = useNavigate();
    const page = 'FrontPage';
    const onSubmit = async(data) => {
        const result = await loginAPI.post(JSON.stringify(data));
        if (result.message === page) {
            navigate(`/${page}`);
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
