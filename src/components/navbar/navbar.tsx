"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navigateToVillaList = (pathname: string) => {
    if (pathname === "/villas") {
      return;
    }
    router.push("/villas");
  };

  return (
    <div
      className={`w-full ${
        isScrolled ? "max-w-[1376px] mx-auto pt-0 px-0" : ""
      }`}
    >
      <header
        className={`fixed z-50 mx-auto transition-[top,background,padding,border-radius,box-shadow] duration-500 ease-[cubic-bezier(0.25, 0.8, 0.5, 1)] ${
          isScrolled
            ? "bg-toby-forest-ash top-[32px] left-[32px] right-[32px] px-8 py-2 lg:min-w-[1200px] rounded-full shadow-lg"
            : "bg-transparent top-0 left-0 right-0 lg:min-w-[1200px] py-4"
        } md:min-w-[640px] md:max-w-[990px]`}
      >
        <div className="w-full flex items-center justify-between gap-6 p-4 font-[Mourich] relative">
          <motion.div
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 10,
              opacity: 1,
            }}
            style={{
              border: "none",
              outline: "none",
            }}
          >
            <Link
              href="/#home"
              className={`text-2xl font-bold font-[Mourich] ${
                isScrolled ? "text-toby-frosted-pearl" : ""
              }`}
            >
              TOBY HOLDINGS
            </Link>
          </motion.div>

          <nav className="hidden md:flex space-x-6 font-[Roca] font-light text-[24px] rounded-full">
            {["Home", "About Us", "Contact Us"].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.6)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 10,
                  duration: 0.3,
                }}
                className="relative group"
              >
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={`${
                    isScrolled
                      ? "hover:text-toby-frosted-pearl text-toby-frosted-pearl"
                      : "hover:text-toby-forest-ash text-toby-forest-ash"
                  }`}
                >
                  {item}
                </a>

                <motion.span
                  className={`absolute bottom-0 left-0 h-[2px] w-0 rounded-full ${
                    isScrolled ? "bg-toby-frosted-pearl" : "bg-toby-forest-ash"
                  }`}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 ml-auto">
            <a
              href="tel:+621234567890"
              className={`text-[24px] font-bold ${
                isScrolled ? "text-toby-frosted-pearl" : "text-toby-forest-ash"
              }`}
            >
              +62 123-4567-890
            </a>

            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1.05,
                opacity: 1,
              }}
              className="ml-auto rounded-full"
            >
              <Button
                variant={isScrolled ? "default" : "outline"}
                onClick={() => {
                  navigateToVillaList(pathname);
                }}
              >
                Check Out Our Villas
              </Button>
            </motion.div>
          </div>

          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300 ${
              isScrolled
                ? "bg-transparent text-toby-frosted-pearl"
                : "bg-transparent text-toby-forest-ash"
            }`}
          >
            <span className="sr-only">Open Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[366px] text-toby-forest-ash p-4 rounded-[20px] mt-2 space-y-4 text-center bg-toby-frosted-pearl font-[Mourich] shadow-lg"
              style={{ maxWidth: "400px" }}
            >
              <div className="space-y-4">
                {["Home", "About Us", "Contact Us"].map((item, idx) => (
                  <Link
                    key={idx}
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 hover:text-gray-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-4 border-t border-gray-300">
                <a
                  href="tel:+621234567890"
                  className="block text-[20px] font-bold text-toby-forest-ash hover:text-gray-300"
                >
                  +62 123-4567-890
                </a>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigateToVillaList(pathname);
                    }}
                  >
                    Check Out Our Villas
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </header>
    </div>
  );
}
