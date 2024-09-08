import React from 'react'
import BanerPNG from '../../assets/banner2.png'
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const Banner2 = () => {
    return (
        <div className='container flex flex-col justify-center items-center  md:flex-row my-20'>

            <div className='container space-y-4'>
                <motion.h1
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView="animate" className='font-bold text-3xl'>Simple way to make stylish living room</motion.h1>
                <motion.p
                    variants={SlideUp(0.4)}
                    initial="initial"
                    whileInView="animate" className='text-sm text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid</motion.p>
                <motion.div
                    variants={SlideUp(0.6)}
                    initial="initial"
                    whileInView="animate" className='flex gap-2 font-serif '>

                    <div className='max-w-[80px] space-y-2 '>
                        <p className='text-3xl font-bold'>15</p>
                        <p className='text-gray-500'>Years of Experience</p>
                    </div>
                    <div className='max-w-[80px] space-y-2'>
                        <p className='text-3xl font-bold'>350</p>
                        <p className='text-gray-500'>Happy Clients</p>
                    </div>
                    <div className='max-w-[80px] space-y-2'>
                        <p className='text-3xl font-bold'>34</p>
                        <p className='text-gray-500'>Award Gained</p>
                    </div>
                </motion.div>
                <motion.button
                    variants={SlideUp(0.6)}
                    initial="initial"
                    whileInView="animate" className='primary-btn bg-black text-white '>Contat US</motion.button>
            </div>
            <div className='py-5'>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }} src={BanerPNG} alt="" />
            </div>

        </div>
    )
}

export default Banner2;
