import React from 'react'
import BanerPNG from '../../assets/banner.png'
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
    return (
        <div className='container flex flex-col justify-center items-center  md:flex-row'>
            <div className=''>
                <motion.img
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }} src={BanerPNG} alt="" />
            </div>
            <div className='container space-y-4'>
                <motion.h1
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate" className='font-bold text-3xl'>We Believe that a team makes any project better</motion.h1>
                <motion.p
                    variants={SlideUp(0.4)}
                    initial="initial"
                    whileInView="animate" className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid</motion.p>
                <motion.button
                    variants={SlideUp(0.6)}
                    initial="initial"
                    whileInView="animate" className='primary-btn bg-black text-white '>Discover Now</motion.button>
            </div>

        </div>
    )
}

export default Banner
