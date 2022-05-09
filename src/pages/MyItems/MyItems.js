import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import EmailVerified from '../EmailVerified/EmailVerified';

const MyItems = () => {
    const [user, loading, error] = useAuthState(auth);


    // let location = useLocation();













    return (
        <div style={{ minHeight: '90vh' }}>
            {
                !user.emailVerified ?
                    <EmailVerified></EmailVerified> :
                    'this is my item'
            }

        </div>
    );
};

export default MyItems;