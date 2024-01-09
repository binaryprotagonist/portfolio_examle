"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cross as Hamburger } from 'hamburger-react'
import {CiHome, CiPhone, CiUser, CiViewBoard} from "react-icons/ci"
import BottomTabBar from '../bottomtabbar/BottomTabBar'
interface TLink {
  id: number;
  title: string;
  url: string;
  icon:React.ElementType
}

const links: Array<TLink> = [
  { id: 1, title: "Home", url: "/", icon: CiHome },
  { id: 2, title: "About", url: "/about", icon: CiUser },
  { id: 3, title: "Portfolio", url: "/portfolio", icon: CiViewBoard },
  { id: 5, title: "Contact", url: "/contact", icon: CiPhone },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [hidden, setIsHidden] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 574);
    };

    setIsHidden(window.innerWidth <= 574)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <div className={`h-24 flex flex-row justify-between items-baseline sm:items-center`}>
        <Link className="font-bold text-xl" href="/">
          Shubham Singh Thakur
        </Link>

        {!hidden ?
        <div className={`flex align-middle gap-5`}>
          {links.map((val: { id: number; title: string; url: string }) => {
            return (
              <Link className="bg-transparent hover:text-orange-500" key={val.id} href={val.url}>
                {val.title}
              </Link>
            );
          })}
        </div> :
          null}
      </div>
    </>
  );
};

export default Navbar;

