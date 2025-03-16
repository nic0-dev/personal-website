"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RainbowButton } from "./magicui/rainbow-button";

const menuItem = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About Me",
    href: "#about",
  },
  {
    id: 3,
    label: "Work Experience",
    href: "#experience",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact Me",
    href: "#contact",
  },
];

export function SiteHeader() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    // Optionally close the hamburger menu if it is open.
    setHamburgerMenuIsOpen(false);
  };

  const mobilenavbarVariant = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkVar = {
    initial: {
      y: "-20px",
      opacity: 0,
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container hidden h-[3.5rem] items-center justify-between gap-16 md:gap-8 md:flex">
          <Link className="text-md flex items-center" href="" onClick={(e) => handleSmoothScroll(e, "#home")}>
            <Image src="/mark-icon.svg" alt="Mark's Logo"
              width={40} height={40}
            />
          </Link>
          <Link className="text-md flex items-center" href="" onClick={(e) => handleSmoothScroll(e, "#home")}>
            Home
          </Link>
          <Link className="text-md flex items-center" href="" onClick={(e) => handleSmoothScroll(e, "#about")}>
            About Me
          </Link>
          <Link className="text-md flex items-center" href="" onClick={(e) => handleSmoothScroll(e, "#experience")}>
            Work Experience
          </Link>
          <Link className="text-md flex items-center" href="" onClick={(e) => handleSmoothScroll(e, "#projects")}>
            Projects
          </Link>

          <div className="ml-auto flex h-full items-center">
            <RainbowButton className="mr-6 text-sm h-10">
              <Link href="" onClick={(e) => handleSmoothScroll(e, "#contact")}>Contact Me</Link>
            </RainbowButton>
          </div>
        </div>
        <div className="container flex h-[3.5rem] items-center justify-between md:hidden">
          <Link className="text-md flex items-center" href="/">
            <Image src="/mark-icon.svg" alt="Mark's Logo" width={40} height={40} />
          </Link>
          <button className="ml-6" onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            `fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] `,
            {
              "pointer-events-none": !hamburgerMenuIsOpen,
            }
          )}
        >
          <div className="container flex h-[3.5rem] items-center justify-between">
            <Link className="text-md flex items-center" href="/">
              Mark Cagas
            </Link>

            <button
              className="ml-6"
              onClick={() => setHamburgerMenuIsOpen((open) => !open)}
            >
              <span className="sr-only">Toggle menu</span>
              {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
            </button>
          </div>
          <motion.ul
            className={`flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in`}
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {menuItem.map((item) => (
              <motion.li
                variants={mobileLinkVar}
                key={item.id}
                className="border-grey-dark pl-6 py-0.5 border-b md:border-none"
              >
                <Link
                  className={`hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors ${
                    hamburgerMenuIsOpen ? "[&_a]:translate-y-0" : ""
                  }`}
                  href=""
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}
