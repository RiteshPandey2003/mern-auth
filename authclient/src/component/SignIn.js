import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signInStart, signInSuccess, SignInFailusre } from "../redux/user/userSlice";
import {useDispatch, useSelector} from 'react-redux';

const SignIn = () => {
  const [formdata, setformdata] = useState({});
  const { error, loading } = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setformdata({...formdata, [e.target.id]: e.target.value})
  }
  const handleSubmit= async(e)=>{
    e.preventDefault();
    
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method : 'POST',
        headers : {
          'Content-TYpe' : "application/json",
        },
        body : JSON.stringify(formdata)
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(SignInFailusre(data))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(SignInFailusre(error));
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign in</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button disabled={loading} className="bg-slate-700 text-white uppercase over: opacity-95 disabled:opacity-80 p-3 rounded-lg">
          {loading ? 'loading..' : 'sign in'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to='/sign-up'>
          <span className="text-blue-500"> sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error ? error.message || "something went Wrong" : ""}</p>
    </div>
  );
};

export default SignIn;
