import React from "react";
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth';
import {app} from '../firebase.js';
import { signInSuccess } from "../redux/user/userSlice.js";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

export const EmailAuthentication =  () =>  {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const handleGoogleClick = async () => {    
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google',{
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json                                                        '
              },
              body : JSON.stringify({
                name : result.user.displayName,
                email : result.user.email,
                photo : result.user.photoURL,
              })
            })
            const data = res.json();
            console.log(data)
            dispatch( signInSuccess(data));
            navigate('/')
            nav
        } catch (error) {
            console.log("could not login with google", error )
        }
    }
  return (
    <button
      type="button" onClick={handleGoogleClick}
      className="bg-red-700 text-white uppercase hover: opacity-95 pacity-80 p-3 rounded-lg"
    >
      continue with google
    </button>
  );
};
 