"use client";
import { useState } from "react";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import { DottedGlowBg } from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const HeroSectionDesign = () => {
  // List of images for the hero section - only include images that exist
  const heroSectionImages = [
    { src: "/herosectionimages/Herosection01.png", alt: "Herosection image 01" },
    { src: "/herosectionimages/Herosection02.png", alt: "Herosection image 02" },
    { src: "/herosectionimages/Herosection03.png", alt: "Herosection image 03" },
    { src: "/herosectionimages/Herosection04.png", alt: "Herosection image 04" },
    { src: "/herosectionimages/Herosection05.png", alt: "Herosection image 05" },
    { src: "/herosectionimages/Herosection06.png", alt: "Herosection image 06" },
    { src: "/herosectionimages/Herosection07.png", alt: "Herosection image 07" },
    { src: "/herosectionimages/Herosection08.png", alt: "Herosection image 08" },
    { src: "/herosectionimages/Herosection09.png", alt: "Herosection image 09" },
    { src: "/herosectionimages/Herosection10.png", alt: "Herosection image 10" },
    { src: "/herosectionimages/Herosection11.png", alt: "Herosection image 11" },
    { src: "/herosectionimages/Herosection12.png", alt: "Herosection image 12" },
    { src: "/herosectionimages/Herosection13.png", alt: "Herosection image 13" },
    { src: "/herosectionimages/Herosection15.png", alt: "Herosection image 15" },
    { src: "/herosectionimages/Herosection16.png", alt: "Herosection image 16" },
    { src: "/herosectionimages/Herosection17.png", alt: "Herosection image 17" },
    { src: "/herosectionimages/Herosection18.png", alt: "Herosection image 18" },
    { src: "/herosectionimages/Herosection19.png", alt: "Herosection image 19" },
    { src: "/herosectionimages/Herosection20.png", alt: "Herosection image 20" },
    { src: "/herosectionimages/Herosection21.png", alt: "Herosection image 21" },
    { src: "/herosectionimages/Herosection22.png", alt: "Herosection image 22" },
  ].filter(Boolean); // Filter out any undefined/null entries

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<null | { src: string; alt: string }>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const openOverlay = (img: { src: string; alt: string }) => {
    setSelectedImg(img);
    setIsOpen(true);
    // Prevent scrolling when overlay open
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setIsOpen(false);
    setSelectedImg(null);
    if (typeof window !== "undefined") document.body.style.overflow = "";
  };

  return (
    <section className="">
      <Container>
        <Navbar />
        <div className="w-full min-h-fit border-b border-[#82A891] flex flex-col font-sans">
          <div className="flex flex-col gap-2 border-b border-[#82A891] relative">
            <DottedGlowBg />
            <Heading className="w-full lg:h-80 h-50 flex flex-col items-center font-bold text-foreground/75 text-center justify-center font-mono lg:text-3xl text-xl tracking-tight lg:leading-[1.24] md:leading-[1.24] leading-tight capitalize mask-radial-from-10%">
              <Image
                src="/threedIcons/herosectionicon1.png"
                alt=""
                width={150}
                height={150}
                className="lg:size-36 md:size-36 size-24 "
              />
              <p className="mt-4">
                Beautifully Crafted
                <br /> Hero section
              </p>
            </Heading>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
            {heroSectionImages
              .filter(img => !failedImages.has(img.src))
              .map((img, idx) => {
                const filteredImages = heroSectionImages.filter(i => !failedImages.has(i.src));
                const isLastTwo = idx >= filteredImages.length - 2;
                return (
                  <div
                    key={img.src}
                    className={[
                      "h-60",
                      "border-[#82A891]",
                      "p-6",
                      idx % 2 === 0 ? "odd:border-r  " : "even:border-b",
                      !isLastTwo ? "border-b" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    tabIndex={0}
                    role="button"
                    aria-label={`Show larger view of ${img.alt}`}
                    onClick={() => openOverlay(img)}
                    onKeyDown={e => {
                      if (e.key === "Enter" || e.key === " ") openOverlay(img);
                    }}
                    
                  >
                    <div className="relative w-full h-full">
                      {/* Use regular img for error detection */}
                      <motion.img
                        layoutId={`image-${img.src}`}
                        initial={false}
                        style={{ display: 'block' }}
                        transition={{
                            duration: 0.3,
                            layout: { duration: 0.3 }
                        }}
                        src={img.src}
                        alt={img.alt}
                        className="object-contain w-full h-full hover:scale-105 cursor-crosshair transition-all duration-300"
                        draggable={false}
                        onError={() => {
                          setFailedImages(prev => new Set(prev).add(img.src));
                        }}
                        onLoad={() => {
                          // Image loaded successfully, ensure it's not in failed set
                          setFailedImages(prev => {
                            const newSet = new Set(prev);
                            newSet.delete(img.src);
                            return newSet;
                          });
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && selectedImg && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center"
              onClick={closeOverlay}
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                layoutId={`image-${selectedImg.src}`}
                initial={false}
                exit={{ 
                  opacity: 0,
                  // scale: 0.95
                }}
                style={{ display: 'flex' }}
                transition={{
                  duration: 0.3,
                  // layout: { duration: 0.3, },
                  // opacity: { duration: 0.25 },
                  // scale: { duration: 0.3 }
                }}
                className="relative rounded-xl shadow-2xl shadow-black/75 max-w-[90vw] max-h-[90vh] flex flex-col items-end"
                onClick={e => e.stopPropagation()}
              >
                {/* <button
                  onClick={closeOverlay}
                  aria-label="Close image preview"
                  className="mb-2 ml-auto p-2 rounded-full bg-black/40 hover:bg-black/70 text-white text-xl transition-all absolute top-2 right-2"
                  style={{ lineHeight: "1" }}
                >
                  &times;
                </button> */}
                <motion.img
                  src={selectedImg.src}
                  alt={selectedImg.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ 
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="object-cover rounded-md max-w-[80vw] max-h-[70vh]"
                  draggable={false}
                  style={{ maxWidth: '80vw', maxHeight: '70vh' }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </Container>
    </section>
  );
};

export default HeroSectionDesign;