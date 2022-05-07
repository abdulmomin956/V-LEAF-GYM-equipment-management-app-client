import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const handleOnSubmit = e => {
        e.preventDefault();

    }
    return (
        <div>
            <h1 className='text-center'>Please Login</h1>
            <div className='w-50 mx-auto'>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='bg-myViolet text-white shadow-none' type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;