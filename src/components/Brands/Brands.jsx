import React from 'react'
import b1 from '../../assets/brand/1.png'
import b2 from '../../assets/brand/2.png'
import b3 from '../../assets/brand/3.png'
import b4 from '../../assets/brand/4.png'
import b5 from '../../assets/brand/5.png';
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Brands = () => {
    return (
        <div className="container">
            <div
                className='flex flex-wrap justify-center lg:justify-between gap-4'
            >
                <motion.img
                    variants={SlideLeft(0.2)}
                    initial="initial"
                    whileInView={"animate"} className=' ' src={b1} alt="" />
                <motion.img
                    variants={SlideLeft(0.4)}
                    initial="initial"
                    whileInView={"animate"} src={b2} alt="" />
                <motion.img
                    variants={SlideLeft(0.6)}
                    initial="initial"
                    whileInView={"animate"} src={b3} alt="" />
                <motion.img
                    variants={SlideLeft(0.8)}
                    initial="initial"
                    whileInView={"animate"} src={b4} alt="" />
                <motion.img
                    variants={SlideLeft(1.0)}
                    initial="initial"
                    whileInView={"animate"} src={b5} alt="" />
            </div>
        </div>
     
    )
}

export default Brands
