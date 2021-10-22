import { getAuth } from '@firebase/auth';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { logout, signInWithGoogle } from '../firebase'
import google from '../icons/google.png'
import './Signin.scss'

function SignIn() {
    let history = useHistory();
    const signinHandler = async () => {
      await signInWithGoogle();
      const auth = getAuth();
      const user = auth.currentUser;
      console.log(user)
      if (user) {
        console.log(user)
        history.push("/dictionary");
      }
    };

    useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user)
    if(user){
        history.push("/dictionary")
    }
    }, [])

    return (
        <div>
            <div className="signinDiv"><img width="50px" src={google}/>
            <button className="signinButton" onClick={signinHandler}>sign in with google</button>
            </div>
        </div>
    )
}

export default SignIn
