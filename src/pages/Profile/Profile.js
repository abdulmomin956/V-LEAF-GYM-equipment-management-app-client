import React from 'react';
import { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { useAuthState, useUpdatePassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import {
    EmailAuthProvider,
    getAuth,
    reauthenticateWithCredential,
} from 'firebase/auth'
import { clear } from '@testing-library/user-event/dist/clear';

const nameRex = /^[a-zA-Z]{3,}(\s)[a-zA-Z]{3,}/;

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [newName, setNewName] = useState('')
    const [nError, setNError] = useState()
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    const [updatePassword, pupdating, perror] = useUpdatePassword(auth);
    const [oldpw, setOldPw] = useState('')
    const [pw, setPw] = useState('')
    const [pw2, setPw2] = useState('')
    const [pError, setPError] = useState();
    // console.log(user);
    // console.log(newName);

    const handleNewName = async () => {
        if (nameRex.test(newName)) {
            if (newName !== user.displayName) {
                const success = await updateProfile({ displayName: newName });
                if (success) {
                    alert('Updated profile');
                }
            }
        } else {
            setNError('Please insert a valid name')
        }

    }

    const handleNewPass = async (e) => {
        e.preventDefault()
        var credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            oldpw
        );
        if (pw === oldpw) {
            setPError('The new password must be different')
        }
        // Prompt the user to re-provide their sign-in credentials
        await reauthenticateWithCredential(auth.currentUser, credential)
            .then(async function () {
                if (pw === pw2) {
                    const success = await updatePassword(pw);
                    if (success) {
                        alert('Updated password');
                        clear();
                    }
                } else {
                    setPError('Password should be matched')
                }

            }).catch(function (error) {
                // console.log(error);
                setPError(error.message)
            });

    }

    // console.log(perror);

    return (
        <div className='d-flex flex-column '>
            <h1 className='text-center'>{user.displayName}</h1>
            <p className='text-center'>{user.email}</p>

            <div style={{ maxWidth: '20rem' }} className="mx-auto border shadow-sm p-4 d-flex flex-column gap-3 mb-5">
                <h3> Update your name</h3>
                <small>Name </small>
                <FormControl onChange={(e) => { setNewName(e.target.value); setNError(false) }} placeholder='Full Name' defaultValue={user.displayName}></FormControl>
                {
                    (nError || upError) && <small className='text-danger'>{nError || upError}</small>
                }
                <Button onClick={handleNewName} disabled={!newName}>Save</Button>
            </div>
            <hr className='mx-5' />
            <form style={{ maxWidth: '20rem' }} className="mx-auto border shadow-sm p-4 d-flex flex-column gap-3 mt-5">
                <h3> Update your password</h3>
                <small>Old password</small>
                <FormControl onChange={e => { setOldPw(e.target.value); setPError(false) }} type='password' placeholder='Old Password' ></FormControl>
                <small>New password</small>
                <FormControl onChange={e => { setPw(e.target.value); setPError(false) }} type='password' placeholder='New Password' ></FormControl>
                <small>Confirm password</small>
                <FormControl onChange={e => { setPw2(e.target.value); setPError(false) }} type='password' placeholder='Confirm Password' ></FormControl>
                {(pError || perror) && <p className='text-danger'>{pError || perror.message}</p>}
                <Button onClick={handleNewPass}>Save</Button>
            </form>

        </div>
    );
};

export default Profile;