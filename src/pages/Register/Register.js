import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gIcon from '../../images/google.jpg'

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    let navigate = useNavigate();
    let location = useLocation();
    // let from = location.state?.from?.pathname || "/";


    const nameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const handleOnSubmit = async e => {
        e.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        navigate('/verify')
    }
    return (
        <div>
            <h1 className='text-center'>Please Register</h1>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Full name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='bg-myViolet text-white shadow-none' type="submit">
                        Register
                    </Button>
                </Form>
                <p className='my-3'>Already have an account?<Link className='text-myViolet ms-2' to='/login'>Log in</Link></p>
                <div className='d-flex w-100 justify-content-between my-3' ><div style={{ height: '1px', backgroundColor: 'gray', width: '48%' }}></div><div className='text-center' style={{ width: '2rem', position: 'relative', bottom: '10px' }}>Or</div><div style={{ height: '1px', backgroundColor: 'gray', width: '48%' }}></div>
                </div>
                <div><Button className='d-block mx-auto rounded-0 py-0 ps-0'><img style={{ width: '35px' }} src={gIcon} alt="" /> Sign in with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Register;