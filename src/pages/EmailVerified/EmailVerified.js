import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const EmailVerified = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div style={{ height: '65vh', marginTop: '25vh' }} className='text-center'>
            Please check your inbox of {user?.email}and verify your email address.
        </div>
    );
};

export default EmailVerified;