import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const nameRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()
    const handleOnSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);

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
            </div>
        </div>
    );
};

export default Register;