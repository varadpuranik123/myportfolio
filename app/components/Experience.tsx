'use client';
import Heading from './Heading'
import Image from 'next/image'
import { IconChevronCompactDown } from '@tabler/icons-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Experience = () => {

  const skills = [
    "Figma",
    "Wireframing",
    "Prototyping",
    "UX Research",
    "User & Stakeholder Interviews",
    "Design Systems"
  ];

  const points = [
    {
      point: "Designed and maintained a scalable design system to ensure visual consistency and faster UI implementation across multiple products."
    },
    {
      point: "Created end-to-end UI/UX designs for both web applications and mobile applications, focusing on usability, accessibility, and responsive behavior."
    },
    {
      point: "Conducted in-depth competitor analysis across platforms such as AstroTalk, AstroSage, Shrimandir, and other astrology-based apps to identify UX gaps, feature opportunities, and interaction patterns."
    },
    {
      point: "Collaborated closely with frontend developers and key stakeholders to align design decisions with business goals and ensure smooth, accurate implementation."
    },
    {
      point: "Worked on a dedicated partner application for astrologers, improving workflow clarity and interaction design to make consultations easier, faster, and more intuitive."
    },
    {
      point: "Optimized user flows to help astrologers deliver maximum value to end users, reducing friction during live consultations and improving overall experience quality."
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='p-6 w-full min-h-fit border-b border-[#82A891] flex flex-col gap-y-4 font-sans'>
      <Heading>
        Experience
      </Heading>
      <div
        aria-label={isOpen ? "Hide details" : "Show details"}
        id="exp-info"
        className="flex items-center justify-between cursor-pointer"
      >
        <div
          className="flex items-center"
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ flex: 1, cursor: "pointer" }}
        >
          <div className="lg:w-24 w-24 lg:h-32 h-24 overflow-hidden flex items-center justify-center border-transparent ring-1 ring-foreground/10 shadow-sm shadow-black/10 rounded-xl">
            <Image className='object-contain size-100 scale-125' src='/inddev-logo-wide.svg' alt='' width={100} height={100} />
          </div>
          <div className="flex flex-col lg:ml-4 ml-2 gap-y-px">
            <h1 className="lg:text-xl text-sm tracking-tighter uppercase font-semibold leading-tight">Inddev</h1>
            <p className="lg:text-base text-sm opacity-75 tracking-tight font-semibold capitalize leading-tight">UI/UX designer intern</p>
            <p className="lg:text-base text-sm opacity-75 tracking-tight font-semibold capitalize leading-tight">Remote • Internship • 11/24 - 9/25</p>
            <div className="flex flex-wrap lg:gap-2 gap-1 mt-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#A2CFAE22] text-[#24422f]/80  text-[10px] font-mono lg:px-1.5 px-0.5 py-0.5 rounded border border-[#82A89133] uppercase tracking-tight font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          aria-label={isOpen ? "Hide details" : "Show details"}
          onClick={(e) => {
            e.stopPropagation(); // Prevent parent div's onClick from firing
            setIsOpen((prev) => !prev);
          }}
          className="bg-transparent border-none z-9 focus:outline-none rounded-full p-1 hover:bg-[#A2CFAE11] transition"
          type="button"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <IconChevronCompactDown className={`lg:size-10 size-6 transition-transform duration-300 ${isOpen ? "-scale-y-100" : ""}`} />
        </button>
      </div>

      {/* Animated details dropdown, shown when isOpen is true */}
      <div className="w-full flex flex-col items-center">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="exp-details"
              className="w-full overflow-hidden px-2"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.28 }
              }}
            >
              <ul className="list-disc text-sm tracking-tight font-medium pl-6 text-foreground/90 space-y-2 mt-2">
                {points.map((item, idx) => (
                  <motion.li
                    initial={{ opacity: 0, filter: "blur(3px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(3px)" }}
                    transition={{
                      opacity: { duration: 0.15, delay: idx * 0.08 },
                      filter: { duration: 0.32, delay: idx * 0.08 }
                    }}
                    key={idx}
                  >
                    {item.point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Experience