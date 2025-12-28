"use client";
import { useState } from "react";
import Container from "@/app/components/Container";
import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import { DottedGlowBg } from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";



const PosterDesign = () => {

  const posterDesignImages = [
    { src: "/posterdesignimages2/poster 0.png", alt: "Poster design 01" },
    { src: "/posterdesignimages2/poster 1.png", alt: "Poster design 02" },
    { src: "/posterdesignimages2/poster 2.png", alt: "Poster design 03" },
    { src: "/posterdesignimages2/poster 3.png", alt: "Poster design 04" },
    { src: "/posterdesignimages2/poster 4.png", alt: "Poster design 05" },
    { src: "/posterdesignimages2/poster 5.png", alt: "Poster design 06" },
    { src: "/posterdesignimages2/poster 6.png", alt: "Poster design 07" },
    { src: "/posterdesignimages2/poster 7.png", alt: "Poster design 08" },
    { src: "/posterdesignimages2/poster 8.png", alt: "Poster design 09" },
    { src: "/posterdesignimages2/poster 9.png", alt: "Poster design 10" },
    { src: "/posterdesignimages2/poster 10.png", alt: "Poster design 11" },
    { src: "/posterdesignimages2/poster 11.png", alt: "Poster design 12" },
    { src: "/posterdesignimages2/poster 12.png", alt: "Poster design 13" },
    { src: "/posterdesignimages2/poster 13.png", alt: "Poster design 14" },
    { src: "/posterdesignimages2/poster 14.png", alt: "Poster design 15" },
    { src: "/posterdesignimages2/poster 15.png", alt: "Poster design 16" },
    { src: "/posterdesignimages2/poster 16.png", alt: "Poster design 17" },
    { src: "/posterdesignimages2/poster 17.png", alt: "Poster design 18" },
    { src: "/posterdesignimages2/poster 18.png", alt: "Poster design 19" },
    { src: "/posterdesignimages2/poster 19.png", alt: "Poster design 20" },
    { src: "/posterdesignimages2/poster 20.png", alt: "Poster design 21" },
    { src: "/posterdesignimages2/poster 21.png", alt: "Poster design 22" },
  ].filter(Boolean);

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
    if (typeof window !== "undefined") document.body.style.overflow = "";
  };

  const handleExitComplete = () => {
    setSelectedImg(null);
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
                src="/threedIcons/posterdesignicon.png"
                alt=""
                width={150}
                height={150}
                className="lg:size-40 md:size-40  size-24 -scale-x-100 "
              />
              <p className="mt-1">
                Beautifully<br /> Designed Posters
              </p>
            </Heading>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
            {posterDesignImages
              .filter(img => !failedImages.has(img.src))
              .map((img, idx) => {
                const filteredImages = posterDesignImages.filter(i => !failedImages.has(i.src));
                const isLastTwo = idx >= filteredImages.length - 2;
                return (
                  <div
                    key={img.src}
                    className={[
                      "h-60",
                      "border-[#82A891]",
                      "p-6",
                      idx % 2 === 0 ? "odd:border-r  " : "even:border-b",
                      !isLastTwo ? "border-b" : "lg:border-b-none md:border-b-none border-b ",
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

        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
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
                initial={false}
                exit={{ 
                  // opacity: 0,
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
                  layoutId={`image-${selectedImg.src}`}
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
  )
}

export default PosterDesign