import Link from "next/link";
import clsx from "clsx";

import CozarLogo from "@/components/ui/CozarLogo";

interface NavItem {
  text: string;
  href: string;
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

const Header = ({ className = "" }: { className?: string }) => {
  return (
    <header
      className={clsx("w-full flex justify-between items-center", className)}
    >
      <CozarLogo priority />
      <NavigationItems data={navItems} />
    </header>
  );
};

const NavigationItems = ({ data }: { data: NavItem[] }) => {
  return (
    <nav>
      <ul className="flex text-body-md">
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

export default Header;
