"use client";
import { motion } from 'motion/react';


const TextAnimation = () => {
    return (
        <div className="flex items-start gap-2 pl-2 w-fit h-6 overflow-hidden mask-t-from-75% mask-b-from-75%">
            <div className="w-2 h-2 mt-1.5  bg-foreground rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-foreground animate-ping rounded-full"></div>
            </div>
            <motion.div
                initial={{
                    y: 0
                }}
                animate={{
                    y: [0, 0, -20, -20, -40],
                    transition: {
                        repeat: Infinity,
                        duration: 2,
                    }
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                    y: { duration: 1 }
                }}
                className=" ">
                <p className="text-sm tracking-tight font-semibold capitalize">
                    Open to full-time
                </p>
                <p className="text-sm tracking-tight font-semibold capitalize">
                    Open to freelance
                </p>
                <p className="text-sm tracking-tight font-semibold capitalize">
                    Open to full-time
                </p>
            </motion.div>
        </div>
    )
}

export default TextAnimation