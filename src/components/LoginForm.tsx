"use client";

import { useState } from "react";

const LoginForm = () => {
  const [showpassword, setShowpassword] = useState(false);
  const handleSignupform = (e: any) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSignupform}
      className="w-6/12 mx-auto flex justify-start flex-col mt-5"
    >
      <label className="mb-2">
        <label htmlFor="username" className="pr-2 block">
          User Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="w-full border border-rose-700 rounded-md p-2"
          required
        />
      </label>
      <label className="mb-2">
        <label htmlFor="password" className="pr-2 block">
          Password
        </label>
        <input
          type={showpassword ? "text" : "password"}
          id="password"
          placeholder="password"
          className="w-full border border-rose-700 rounded-md p-2"
          required
        />
      </label>

      <label className="mb-2 ">
        <input
          type="checkbox"
          onChange={(e) => setShowpassword(e.target.checked)}
          name="showpassword"
          id="showpassword"
          className="box mr-2 cursor-pointer"
        />
        <label htmlFor="showpassword" className="select-none cursor-pointer">
          Show Password!
        </label>
      </label>
      <button type="submit" className="bg-white w-fit p-2 rounded-md">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
1;
