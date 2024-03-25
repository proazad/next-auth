"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Signupform = () => {
  const router = useRouter();
  const [showpassword, setShowpassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (
      user.name.length > 0 &&
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.confirmPassword.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleSignupform = async (e: any) => {
    e.preventDefault();
    console.log(user);
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
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
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
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="w-full border border-rose-700 rounded-md p-2"
          placeholder="User name"
          autoComplete="username"
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
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full border border-rose-700 rounded-md p-2"
          placeholder="Email"
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
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full border border-rose-700 rounded-md p-2"
          placeholder="Enter New Password"
          autoComplete="new-password"
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
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          className="w-full border border-rose-700 rounded-md p-2"
          placeholder="Confirm Password"
          autoComplete="new-password"
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
      {buttonDisabled ? (
        <button
          type="submit"
          className="bg-slate-400 cursor-none text-white w-fit p-2 rounded-md"
          disabled
        >
          No Sign Up
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-600 text-white w-fit p-2 rounded-md"
        >
          Sign Up
        </button>
      )}
    </form>
  );
};

export default Signupform;
1;
