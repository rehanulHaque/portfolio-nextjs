import React from "react";
import { Logo, Links } from "../Data/NavData";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar w-full flex items-center">
      <Link href={Logo.link}><Image width={240} height={240} src={Logo.srcPath} alt={Logo.altTitle} className="w-60"/></Link>
      {Links.map((e) => {
        return (
          <Link href={e.link} key={e.id} className="mx-2">
            {e.name}
          </Link>
        )
      })}
    </nav>
  );
};

export default Navbar;
