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

const Header = () => {
  return (
    <header className={clsx("p-10 w-full flex justify-between items-center")}>
      <CozarLogo priority />
      <NavigationItems data={navItems} />
    </header>
  );
};

const NavigationItems = ({ data }: { data: NavItem[] }) => {
  return (
    <nav>
      <ul className="flex">
        {data.map(({ text, href }) => {
          return (
            <li key={href}>
              <Link href={href} className="p-2">
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
