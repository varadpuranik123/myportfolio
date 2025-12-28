"use client";
import { useState } from "react";
import Container from "./Container";
import { motion, AnimatePresence } from "motion/react";
import Heading from "./Heading";
import Button from "./Button";
import { IconArrowUpRight } from "@tabler/icons-react";


const PosterSection = () => {

    const posterDesignImages = [
        { src: "/posterdesignimages2/poster 0.png", alt: "Poster design 01" },
        { src: "/posterdesignimages2/poster 1.png", alt: "Poster design 02" },
        { src: "/posterdesignimages2/poster 2.png", alt: "Poster design 03" },
        { src: "/posterdesignimages2/poster 3.png", alt: "Poster design 04" },
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
        setSelectedImg(null);
        if (typeof window !== "undefined") document.body.style.overflow = "";
    };


    return (
            <Container className="h-fit border-none">
                <div className="w-full min-h-fit flex flex-col font-sans border-b border-[#82a891]">

                    <div className="flex items-center justify-between p-6">
                        <Heading className="lg:text-xl md:text-xl text-lg"> Poster Designs </Heading>
                        <Button href="posterdesign" className="flex px-2 items-center">
                            See More 
                            <IconArrowUpRight className='size-4 ' />
                        </Button>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
                        {posterDesignImages
                            .filter(img => !failedImages.has(img.src))
                            .map((img, idx) => {
                                const filteredImages = posterDesignImages.filter(i => !failedImages.has(i.src));
                                const isLastTwo = idx >= filteredImages.length - 2;
                                const isFirstTwo = idx === 0 || idx === 1;
                                return (
                                    <div
                                        key={img.src}
                                        className={[
                                            "h-60",
                                            "border-[#82A891]",
                                            "p-6",
                                            idx % 2 === 0 ? "odd:border-r  " : "",
                                            !isLastTwo ? "border-b" : "",
                                            isFirstTwo ? "border-t" : "",
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
                                className="relative rounded-xl z-50 shadow-2xl shadow-black/75 max-w-[90vw] max-h-[90vh] flex flex-col items-end"
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
            </Container>
    )
}

export default PosterSection