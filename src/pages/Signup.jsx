import React, {useRef} from 'react'
import ButtonFilled from '../components/UI/ButtonFilled';
import { auth } from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser } from '../store/slices/userSlice';
import { Link } from 'react-router-dom';
function Signup() {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passRef = useRef();
    const confirmPassRef = useRef();
    const nav = useNavigate();
    const signupHandler = () => {
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const confirmPass = confirmPassRef.current.value;

        if (pass !== confirmPass) {
            return;
        }
        createUserWithEmailAndPassword(auth, email, pass).then((userCredential) => {
            dispatch(setActiveUser({
                email: userCredential.user.email,
                uid: userCredential.user.uid,
            }));
            nav('/');
        }).catch((err) => {
            console.log(err);
        })
        console.log(email, pass, confirmPass);
    };
    return (
        <div className='flex flex-col gap-3 min-w-[500px] m-auto p-4 border-2 shadow-bs1 border-darkBlue rounded-lg'>
            <h1 className='text-3xl font-bold text-center mb-10'>Signup</h1>
            <label htmlFor="email" className='text-xl font-medium'>Email</label>
            <input ref={emailRef} type='email' className='p-2 text-xl border-2 shadow-lg border-lightBlue rounded-xl' id='email' />
            <label htmlFor="pass" className='text-xl font-medium'>Password</label>
            <input ref={passRef} type='password' className='p-2 text-xl border-2 shadow-lg border-lightBlue rounded-xl' id='pass' />
            <label htmlFor="confirmPass" className='text-xl font-medium'>Confirm Password</label>
            <input type='password' ref={confirmPassRef} className='p-2 text-xl border-2 shadow-lg border-lightBlue rounded-xl' id='confirmPass' />
            <ButtonFilled className={`mt-10`} onClick={signupHandler}>Signup</ButtonFilled>
            <Link className='text-center text-lg font-medium text-darkBlue mt-4' to={'/login'}>Already Have an Account? Log In</Link>
        </div>
    )
}

export default Signup;