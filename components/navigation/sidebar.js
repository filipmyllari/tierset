"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHome, FaUsers, FaBox } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { SiSitepoint } from "react-icons/si";

const links = [
  { to: "/", icon: FaHome },
  { to: "/om-oss", icon: FaUsers },
  { to: "/tjanster", icon: FaBox },
  { to: "/projekt", icon: SiSitepoint },
  { to: "/kontakt", icon: AiFillMail },
];

const NavItem = ({ to, Icon }) => {
  const pathname = usePathname();

  // Check if the current path starts with the 'to' path
  let isActive;
  if (to === "/") {
    isActive = pathname === to;
  } else {
    isActive = pathname.startsWith(to);
  }

  return (
    <li className="flex-grow md:flex-grow-0 relative md:ml-2">
      <Link
        className={`flex items-center justify-center w-full py-4 text-white transition-all duration-300 relative ${
          isActive ? "line-active" : ""
        }`}
        href={to}
      >
        <span className="bg-[#2c3e50] p-2 rounded-full md:mr-2">
          <Icon size={24} className={`text-[white]`} />
        </span>

        {isActive && (
          <span
            className={`w-3/5 h-1 bg-white absolute ${
              isActive ? "md:right-0 md:top-[20%] top-0" : "bottom-2 left-2/5"
            } transform -translate-x-2/5 line rounded md:w-1 md:h-3/5 md:bottom-1/5 md:right-0 md:transform-none`}
            aria-hidden={true}
          ></span>
        )}
      </Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <ul className="flex flex-row md:flex-col items-center justify-center bg-[#14213d] p-4 fixed bottom-0 left-1/2 md:fixed md:left-0 md:top-1/2 transform md:-translate-x-0 -translate-x-1/2 md:-translate-y-1/2 w-full md:w-14 h-20 md:h-2/6 rounded-t-3xl md:rounded-r-3xl md:rounded-tl-none z-50 md:z-50">
      {links.map((link, index) => (
        <NavItem key={index} to={link.to} Icon={link.icon} />
      ))}
    </ul>
  );
};

export default Sidebar;
