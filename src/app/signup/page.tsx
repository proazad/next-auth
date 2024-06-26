import Signupform from "@/components/Signupform";
import Link from "next/link";
const SignUpPage = () => {
  return (
    <main className="max-w-3xl mx-auto bg-emerald-300 mt-5 rounded-md">
      <div className="py-5">
        <Signupform />
        <p className="text-center my-5">
          Already Have an Account ? Please-
          <Link href={"/login"} className="underline text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpPage;
