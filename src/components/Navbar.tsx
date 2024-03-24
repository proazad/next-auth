import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-none">
          <Link href={"/"} className="font-bold text-2xl">
            NextAuth
          </Link>
        </div>
        <ul className="flex-1 flex justify-end items-center gap-5 text-slate-700 font-semibold">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
