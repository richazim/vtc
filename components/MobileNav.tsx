"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Curve from "@/components/Curve";
import { links } from "@/data/links";
import { mobileMenuItemSlideInVariant, mobileMenuSlideInVariant } from "@/lib/motion/slide_in";
import Link from "next/link";
import { buttonScaleVariant } from "@/lib/motion/scale";

const MobileNav = () => {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <motion.div
      variants={mobileMenuSlideInVariant}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100vh] fixed top-0 right-0 text-white bg-yellow -z-10"
    >

      <div className="box-border h-[100%] w-[100%] p-[100px] flex flex-colum justify-center">
        <div
          onMouseLeave={() => {
            setHoveredHref(null);
          }}
          className="flex flex-col text-[56px] gap-[12px] mt-[20px]"
        >
          <div className="text-[#999] border-b border-[#999] uppercase text-[11px] mb-[40px]">
            <p>Menu</p>
          </div>

          {links.home.sections.map((homeSection, index) => {
            return (
                <motion.div
                  className="relative flex items-center"
                  key={index}
                  onMouseEnter={() => {
                    setHoveredHref(homeSection.href);
                  }}
                  custom={index}
                  variants={mobileMenuItemSlideInVariant}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  
                    <motion.div
                      variants={buttonScaleVariant}
                      animate={hoveredHref === homeSection.href ? "open" : "closed"}
                      className="absolute left-[-30px] w-[10px] h-[10px] bg-white rounded-full"
                    ></motion.div>

                    <Link href={`/${homeSection.href}`}>{homeSection.label}</Link>

                </motion.div>

            );
          })}
        </div>
      </div>

      <Curve />

    </motion.div>
  );
};

export default MobileNav;
