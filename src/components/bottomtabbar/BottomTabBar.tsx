"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaFileContract, FaUser } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

interface TLink {
  id: number;
  title: string;
  url: string;
  icon: React.ElementType;
}

const links: Array<TLink> = [
  { id: 1, title: "Home", url: "/", icon: FaHome },
  { id: 2, title: "About", url: "/about", icon: FaUser },
  { id: 3, title: "Portfolio", url: "/portfolio", icon: FaFileContract },
  { id: 5, title: "Contact", url: "/contact", icon: BiSolidContact },
];

const BottomTabBar = () => {
  const [hidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 574);
    };
    setIsHidden(window.innerWidth <= 574);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div>
      {hidden ? (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-3 flex justify-around">
          <div className={`flex align-middle gap-12 transition-all duration-300 ease-in-out`}>
            {links.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  className="bg-transparent hover:text-orange-500 transition-transform duration-300 hover:scale-110 hover:-translate-y-1 flex flex-col items-center"
                  key={item.id}
                  href={item.url}
                >
                  <IconComponent size={24} />
                  <span className="text-sm">{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default BottomTabBar;
