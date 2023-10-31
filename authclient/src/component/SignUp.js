import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl tex-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white uppercase over: opacity-95 disabled:opacity-80 p-3 rounded-lg">
          {" "}
          Sign Up{" "}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className="text-blue-500"> sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
