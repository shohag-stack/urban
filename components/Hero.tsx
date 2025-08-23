'use client'
import React from "react";
import {motion, Variants} from "framer-motion";

export default function Hero(){
    const hero = '/images/hero.png' // Adjust the path as necessary
    const heading = 'Discover Your Home Awaits'

    const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between each word animation
      },
    },
  };

  const wordVariants : Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
    return (
        <div className="bg-secondary relative w-full overflow-hidden" style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="hero pt-20 md:py-20 min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <motion.div
                            className="text-white text-4xl md:text-5xl font-bold"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                            >
                            {heading.split(" ").map((word, index) => (
                                <motion.h1 className="text-white leading-8 md:leading-14" key={index} variants={wordVariants}>
                                {word}
                                </motion.h1>
                            ))}
                            </motion.div>
                        <p className="text-white md:text-1xl">These should help convey a sense of aspiration and possibility, which are often associated with the real estate market.</p>
                        <div className="relative max-w-sm mt-10">
                            <input className="input-with-button" placeholder="Enter your email" type="text" />
                            <button className="subscribe-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}                         