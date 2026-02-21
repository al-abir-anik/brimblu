"use client";

import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="w-auto hidden md:inline-flex items-center justify-center gap-7 text-sm capitalize font-semibold text-shop-light-color">
      {headerData.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-shop-green hoverEffect relative group ${pathname === item?.href && "text-shop-green"}`}
        >
          {item?.title}
          <span
            className={`w-0 h-0.5 absolute -bottom-0.5 left-1/2 bg-shop-green group-hover:w-1/2 group-hover:left-0 hoverEffect ${pathname === item?.href && "w-1/2"}`}
          />
          <span
            className={`w-0 h-0.5 absolute -bottom-0.5 right-1/2 bg-shop-green group-hover:w-1/2 group-hover:right-0 hoverEffect ${pathname === item?.href && "w-1/2"}`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;
