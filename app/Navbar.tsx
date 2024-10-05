"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

type linkProp = {
  label: string;
  link: string;
};

const links: linkProp[] = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Issues",
    link: "/issues",
  },
];

const Navbar: React.FC = () => {
  const currentPath = usePathname();
  return (
    <nav className="flex justify-around my-4 border-b-2 py-2 px-10">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className={`${
                currentPath === item.link ? "text-black" : "text-blue-500"
              } hover:text-black transition-colors`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
