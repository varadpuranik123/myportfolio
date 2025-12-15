'use client';
import Heading from './Heading'
import Image from 'next/image'
import { IconChevronCompactDown } from '@tabler/icons-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

// Experience JSON template data
const experienceData = [
  {
    company: "Inddev",
    logo: "/inddev-logo-wide.svg",
    role: "UI/UX designer intern",
    locationType: "Remote",
    type: "Internship",
    duration: "11/24 - 9/25",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "UX Research",
      "User & Stakeholder Interviews",
      "Design Systems"
    ],
    points: [
      "Designed and maintained a scalable design system to ensure visual consistency and faster UI implementation across multiple products.",
      "Created end-to-end UI/UX designs for both web applications and mobile applications, focusing on usability, accessibility, and responsive behavior.",
      "Conducted in-depth competitor analysis across platforms such as AstroTalk, AstroSage, Shrimandir, and other astrology-based apps to identify UX gaps, feature opportunities, and interaction patterns.",
      "Collaborated closely with frontend developers and key stakeholders to align design decisions with business goals and ensure smooth, accurate implementation.",
      "Worked on a dedicated partner application for astrologers, improving workflow clarity and interaction design to make consultations easier, faster, and more intuitive.",
      "Optimized user flows to help astrologers deliver maximum value to end users, reducing friction during live consultations and improving overall experience quality."
    ]
  },
  // You can add more experience objects here following this template
  {
    company: "Pixel Studio",
    logo: "/pixel-studio-logo.svg",
    role: "Junior Product Designer",
    locationType: "Hybrid",
    type: "Full-time",
    duration: "01/23 - 10/24",
    skills: [
      "Adobe XD",
      "Interaction Design",
      "Visual Design",
      "HTML/CSS Basics",
      "Usability Testing"
    ],
    points: [
      "Led the visual redesign of the client dashboard, improving user engagement metrics by 15% within three months.",
      "Developed high-fidelity prototypes for A/B testing, helping the product team validate new feature concepts early.",
      "Collaborated with the marketing team to align product visuals with the company's new branding guidelines."
    ]
  }
];

// This version only allows one card open at a time (accordion style)
const Experiencecopy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className='p-6 w-full min-h-fit border-b border-[#82A891] flex flex-col gap-y-4 font-sans'>
      <Heading>
        Experience Copy
      </Heading>
      {experienceData.map((exp, idx) => (
        <div key={exp.company + exp.role} className="mb-2">
          <div
            aria-label={openIndex === idx ? "Hide details" : "Show details"}
            onClick={() => handleToggle(idx)}
            id={`exp-info-${idx}`}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center ">
              <div className="lg:w-24 w-24 lg:h-32 h-24 overflow-hidden flex items-center justify-center border-transparent ring-1 ring-foreground/10 shadow-sm shadow-black/10 rounded-xl">
                <Image
                  className='object-contain size-100 scale-125'
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col lg:ml-4 ml-2 gap-y-px">
                <h1 className="lg:text-xl text-sm tracking-tighter uppercase font-semibold leading-tight">
                  {exp.company}
                </h1>
                <p className="lg:text-base text-sm opacity-75 tracking-tight font-semibold capitalize leading-tight">
                  {exp.role}
                </p>
                <p className="lg:text-base text-sm opacity-75 tracking-tight font-semibold capitalize leading-tight">
                  {exp.locationType} • {exp.type} • {exp.duration}
                </p>
                <div className="flex flex-wrap lg:gap-2 gap-1 mt-2">
                  {exp.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="bg-[#A2CFAE22] text-[#24422f]/80 lg:text-xs text-[10px] font-mono lg:px-1.5 px-0.5 py-0.5 rounded whitespace-nowrap border border-[#82A89133] uppercase tracking-tight font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              aria-label={openIndex === idx ? "Hide details" : "Show details"}
              onClick={(e) => {
                e.stopPropagation();
                handleToggle(idx);
              }}
              className="bg-transparent border-none focus:outline-none rounded-full p-1 hover:bg-[#A2CFAE11] transition"
              type="button"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <IconChevronCompactDown className={`lg:size-10 size-6 transition-transform duration-300 ${openIndex === idx ? "-scale-y-100" : ""}`} />
            </button>
          </div>
          {/* Animated details dropdown, shown when openIndex === idx is true */}
          <div className="w-full flex flex-col items-center">
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  key={`exp-details-${idx}`}
                  className="w-full overflow-hidden px-2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.28 }
                  }}
                >
                  <ul className="list-disc text-sm tracking-tight font-medium pl-6 text-foreground/90 space-y-2 mt-4">
                    {exp.points.map((point, pidx) => (
                      <motion.li
                        initial={{ opacity: 0, filter: "blur(3px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(3px)" }}
                        transition={{
                          opacity: { duration: 0.15, delay: pidx * 0.08 },
                          filter: { duration: 0.32, delay: pidx * 0.08 }
                        }}
                        key={pidx}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experiencecopy