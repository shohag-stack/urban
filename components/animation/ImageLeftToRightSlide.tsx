'use client'
import React from 'react'
import {motion} from "framer-motion"

export default function ImageLeftToRightSlide() {
    return (
        <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: '100%' }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="absolute inset-0 bg-white z-10"
        />
    )
}
