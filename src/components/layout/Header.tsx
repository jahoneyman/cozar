"use client";

import Link from "next/link";
import clsx from "clsx";

import CozarLogo from "@/components/ui/CozarLogo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IconType } from "react-icons";
import IconButton from "../ui/IconButton";

interface NavItem {
  text: string;
  href: string;
}

interface SocMedItems {
  icon: IconType;
  url: string;
}

const navItems: NavItem[] = [
  {
    text: "Studio",
    href: "#studio",
  },
  {
    text: "Projects",
    href: "#projects",
  },
  {
    text: "Services",
    href: "#services",
  },
  {
    text: "Design Process",
    href: "#design-process",
  },
  {
    text: "Testimonials",
    href: "#testimonials",
  },
  {
    text: "Contact Us",
    href: "#contact-us",
  },
];

const socMedIcons: SocMedItems[] = [
  {
    icon: FaSquareFacebook,
    url: "facebook.com",
  },
  {
    icon: FaInstagram,
    url: "instagram.com",
  },
];

const Header = ({ className = "" }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={clsx("w-full flex justify-between items-center", className)}
    >
      <CozarLogo priority />
      <NavigationItems data={navItems} />
      <MobileNavigationItems
        data={navItems}
        isOpen={isOpen}
        handleIsOpen={handleIsOpen}
      />
    </header>
  );
};

const NavigationItems = ({ data }: { data: NavItem[] }) => {
  return (
    <nav>
      <ul className="hidden lg:flex text-body-md">
        {data.map(({ text, href }) => {
          return (
            <li key={href}>
              <Link
                href={href}
                className="p-2 hover:text-primary-200 transition-colors"
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const MobileNavigationItems = ({
  data,
  isOpen,
  handleIsOpen,
}: {
  data: NavItem[];
  isOpen: boolean;
  handleIsOpen: () => void;
}) => {
  return (
    <>
      {!isOpen && (
        <IconButton
          icon={<Menu />}
          onClick={handleIsOpen}
          ariaLabel="Open menu"
          className="lg:hidden hover:text-primary-400 transition-colors cursor-pointer"
        />
      )}
      <div
        className={clsx(
          "flex flex-col fixed inset-y-0 right-0 w-80 bg-primary-1000/80 z-50",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none",
        )}
      >
        <IconButton
          icon={<X />}
          onClick={handleIsOpen}
          ariaLabel="Close menu"
          className="self-end p-12 hover:text-primary-400 transition-colors cursor-pointer"
        />
        <ul className="flex flex-col">
          {data.map(({ text, href }) => (
            <li
              key={href}
              className="px-10 py-5 relative overflow-hidden cursor-pointer group
             before:content-[''] before:absolute before:inset-0
             before:bg-neutral-white before:origin-left before:scale-x-0
             before:transition-transform before:duration-300
             hover:before:scale-x-100"
            >
              <Link
                href={href}
                className="relative z-10 transition-colors group-hover:text-primary-1000"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex p-10 gap-4 mt-auto">
          {socMedIcons.map(({ icon: Icon, url }) => (
            <li key={url} className="">
              <Icon
                size={32}
                className="transition-colors cursor-pointer hover:text-primary-400"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
