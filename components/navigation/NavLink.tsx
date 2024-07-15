import React from "react";
import Link from "next/link";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  text: React.ReactNode;
  path: string;
}

const NavLink = ({ text, path, ...props }: NavLinkProps) => {
  return (
    <Link href={path} {...props}>
      {text}
    </Link>
  );
};

export default NavLink;
