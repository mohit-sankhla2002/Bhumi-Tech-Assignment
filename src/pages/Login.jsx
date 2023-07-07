import React, {useRef} from 'react'
import ButtonFilled from '../components/UI/ButtonFilled';

function Login() {
    const emailRef = useRef();
    const passRef = useRef();
    const loginHandler = () => {
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        console.log(email, pass);
    };
    return (
        <div className='flex flex-col gap-3 min-w-[500px] p-4 border-2 shadow-bs1 border-darkBlue'>
            <h1 className='text-3xl font-bold text-center mb-10'>Login</h1>
            <label htmlFor="email" className='text-xl font-medium'>Email</label>
            <input type='email' ref={emailRef} className='p-2 text-xl border-2 shadow-lg border-lightBlue rounded-xl' id='email' />
            <label htmlFor="pass" className='text-xl font-medium'>Password</label>
            <input type='password' ref={passRef} className='p-2 text-xl border-2 shadow-lg border-lightBlue rounded-xl' id='pass' />
            <ButtonFilled className={`mt-10`} onClick={loginHandler}>Login</ButtonFilled>
        </div>
    )
}

export default Login;