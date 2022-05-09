import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const emailRef = useRef()
    const passRef = useRef()

    const handleOnSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password)

        if (auth?.currentUser) {
            console.log(auth?.currentUser);
            navigate(from, { replace: true });

        }
    }

    // google button
    const gButton = { text: 'Sign in' };


    return (
        <div>
            <h1 className='text-center'>Please Login</h1>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button disabled={loading} className='bg-myViolet text-white shadow-none' type="submit">
                        {loading ?
                            'Loading' :
                            'Login'}
                    </Button>
                </Form>
                <p className='my-3'>Don't have an account?<Link className='text-myViolet ms-2' to='/register'>Create an account</Link></p>
                <SocialLogin props={gButton}></SocialLogin>

            </div>
        </div>
    );
};

export default Login;