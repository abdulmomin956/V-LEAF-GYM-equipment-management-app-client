import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import gIcon from '../../images/google.jpg'

const SocialLogin = ({ props }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = async () => {
        await signInWithGoogle();
        if (auth?.currentUser) {
            navigate(from, { replace: true });

        }
    }

    return (
        <div>
            <div className='d-flex w-100 justify-content-between my-3' ><div style={{ height: '1px', backgroundColor: 'gray', width: '48%' }}></div><div className='text-center' style={{ width: '2rem', position: 'relative', bottom: '10px' }}>Or</div><div style={{ height: '1px', backgroundColor: 'gray', width: '48%' }}></div>
            </div>
            <div><Button onClick={handleGoogleSignIn} className='d-block mx-auto rounded-0 py-0 ps-0'><img style={{ width: '35px' }} src={gIcon} alt="" />{loading ?
                'Loading' :
                `${props.text} with Google`} </Button>
            </div>
            {error && <p className='text-danger pe-auto'>{error.message}</p>}
        </div>
    );
};

export default SocialLogin;