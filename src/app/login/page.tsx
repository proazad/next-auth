import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const LogInPage = () => {
  return (
    <main className="max-w-3xl mx-auto bg-emerald-300 mt-5 rounded-md">
      <div className="py-5">
        <LoginForm />
        <p className="text-center">
          New Here ? Please-
          <Link href={"/signup"} className="underline text-blue-700">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LogInPage;
