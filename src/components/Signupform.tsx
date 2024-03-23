"use client";

import { useState } from "react";

const Signupform = () => {
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
        <label htmlFor="name" className="pr-2 block">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Full Name"
          className="w-full border border-rose-700 rounded-md p-2"
          required
        />
      </label>
      <label className="mb-2">
        <label htmlFor="username" className="pr-2 block">
          User Name
        </label>
        <input
          type="text"
          id="username"
          placeholder="User name"
          className="w-full border border-rose-700 rounded-md p-2"
          required
        />
      </label>
      <label className="mb-2">
        <label htmlFor="email" className="pr-2 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full border border-rose-700 rounded-md p-2"
          required
        />
      </label>
      <label className="mb-2">
        <label htmlFor="password" className="pr-2 block">
          New Password
        </label>
        <input
          type={showpassword ? "text" : "password"}
          id="password"
          placeholder="Enter New Password"
          className="w-full border border-rose-700 rounded-md p-2"
          required
        />
      </label>
      <label className="mb-2">
        <label htmlFor="confirmpassword" className="pr-2 block">
          Confirm Password
        </label>
        <input
          type={showpassword ? "text" : "password"}
          id="confirmpassword"
          placeholder="Confirm Password"
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
        Submit
      </button>
    </form>
  );
};

export default Signupform;
1;
