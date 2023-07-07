import React, {useRef} from 'react'
import ButtonFilled from '../components/UI/ButtonFilled';
import {auth} from '../firebase';
import {useDispatch, useSelector} from 'react-redux';
import { setActiveUser} from '../store/slices/userSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const emailRef = useRef();
    const passRef = useRef();
    const loginHandler = () => {
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(auth, email, pass).then((userCredential) => {
            dispatch(setActiveUser({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
            }))
            nav('/');
        }).catch((err) => {
            console.log(err);
        })
        console.log(email, pass);
    };
    return (
        <div className='flex flex-col gap-3 min-w-[500px] p-4 border-2 shadow-bs1 border-darkBlue rounded-lg'>
            <h1 className='text-3xl font-bold text-center mb-10'>Login</h1>
            <label htmlFor="email" className='text-xl font-medium'>Email</label>
            <input type='email' ref={emailRef} className='p-2 text-xl border-2 shadow-lg border-lightBlue rounded-xl' id='email' />
            <label htmlFor="pass" className='text-xl font-medium'>Password</label>
            <input type='password' ref={passRef} className='p-2 text-xl border-2 shadow-lg border-lightBlue rounded-xl' id='pass' />
            <ButtonFilled className={`mt-10`} onClick={loginHandler}>Login</ButtonFilled>

            <Link className='text-center text-lg font-medium text-darkBlue mt-4' to={'/signup'}>Don't Have an Account? Sign Up</Link>
            <Link className='text-center text-lg font-medium text-darkBlue mt-4' to={'/'}>Back to Main Site</Link>
        </div>
    )
}

export default Login;