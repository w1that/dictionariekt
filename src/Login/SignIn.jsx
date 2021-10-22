import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { auth, signInWithGoogle } from '../firebase'

function SignIn() {
    const user = auth;
    let history = useHistory()
    useEffect(() => {
        if (user) history.replace("/dictionary");
      }, [user]);
    return (
        <div>
            <button onClick={signInWithGoogle}>sign in with google</button>
        </div>
    )
}

export default SignIn
