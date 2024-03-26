"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [showpassword, setShowpassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const handleSignupform = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login Successfull", response.data);
      toast.success("Login Successful");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSignupform}
      className="w-6/12 mx-auto flex justify-start flex-col mt-5"
    >
      <h1 className="font-bold text-3xl underline text-center">
        {loading ? "Processing" : "Login"}
      </h1>
      <label className="mb-2">
        <label htmlFor="username" className="pr-2 block">
          Email
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
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
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
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
      {buttonDisabled ? (
        <button
          type="submit"
          className="bg-slate-400 cursor-none text-white w-fit p-2 rounded-md"
          disabled
        >
          No Login
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-600 text-white w-fit p-2 rounded-md"
        >
          Login
        </button>
      )}
    </form>
  );
};

export default LoginForm;
1;
