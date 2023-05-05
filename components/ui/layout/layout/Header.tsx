import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";

export const Header = () => {
  const { t } = useTranslation("layout");
  const router = useRouter();
  const black = router.pathname === "/contact";
  const textColor = black ? "text-black" : "text-white";
  return (
    <>
      {/* <div 
        id="progress"
        className="absolute h-2 w-full"
      /> */}
      <header className="absolute w-full h-20 z-50 top-4  text-white">
        <div className=" mx-auto px-4 flex justify-end items-center h-full">
          <Link href="/">
            <p className="mx-5 hover:text-amber-400">Home</p>
          </Link>
          <Link href="/login">
            <p className="mx-5 hover:text-amber-400">Login</p>
          </Link>
          <Link href="/signup">
            <p className="mx-5 hover:text-amber-400">Signup</p>
          </Link>
          <Link href="/about">
            <p className="mx-5 hover:text-amber-400">About</p>
          </Link>
        </div>
      </header>
    </>
  );
};
