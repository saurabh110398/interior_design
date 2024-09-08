import React from 'react'
import hero from '../../assets/hero.png';
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";


const Hero = () => {
    return (
        <>
            <div className='container my-20 flex flex-col md:flex-row w-full space-y-4 '>
                <div className="flex text-center md:text-start flex-col w-full md:w-1/2 space-y-4">

                    <motion.h1
                        variants={SlideUp(0.2)}
                        initial="initial"
                        animate="animate" div className='font-bold text-2xl  md:text-4xl font-serif'>
                        <span>SKETCH LUXURY INTEROR DESIGN</span>
                    </motion.h1>
                    <motion.p
                        variants={SlideUp(0.5)}
                        initial="initial"
                        animate="animate" div className='text-md  md:text-lg  font-serif text-gray-500'>
                        <span>Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</span>

                    </motion.p>
                    <div className='flex space-x-5 justify-center md:justify-start'>
                        <motion.button
                            variants={SlideUp(0.8)}
                            initial="initial"
                            animate="animate" className='primary-btn bg-black text-white'>Get Started</motion.button>
                        <motion.button
                            variants={SlideUp(1.1)}
                            initial="initial"
                            animate="animate" className=' primary-btn  text-black'>Contact US</motion.button>

                    </div>
                </div>
                <div className='w-full md:w-1/2 my-4 object-cover'>
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }} src={hero} alt="" />
                </div>
            </div>


        </>

    )
}

export default Hero
