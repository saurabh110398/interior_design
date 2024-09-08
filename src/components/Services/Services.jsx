import React from 'react'
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ServiceCard = [
    {
        id: 1,
        title: "Luxury Facilities",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <FaVectorSquare />,
        link: "#",
        delay: 0.2,
    },
    {
        id: 2,
        title: "Quality Products",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        icon: <FaPenToSquare />,
        link: "#",
        delay: 0.4,
    },
    {
        id: 3,
        title: "Affordable Price",
        description:
            "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        icon: <BiSolidDollarCircle />,
        link: "#",
        delay: 0.6,
    },
];

const Services = () => {
    return (
        <div className='container my-20  '>
            <div
                className='mx-auto max-w-[350px] text-center'
            >
                <motion.h1
                    variants={SlideUp(0.2)}
                    initial="initial"
                    whileInView={"animate"} className='font-bold text-3xl mx-auto my-4'>What we provide</motion.h1>
                <motion.p
                    variants={SlideUp(0.4)}
                    initial="initial"
                    whileInView={"animate"} className=' text-gray-500'> Bring your dream home to life with one-on-one
                    design help & hand picked products</motion.p>
            </div>
            <div


                className='grid grid-cols-1 md:grid-cols-3 my-8 gap-4'
            >
                {
                    ServiceCard.map(ele => {
                        return (
                            <motion.div
                                variants={SlideUp(ele.delay)}
                                initial="initial"
                                whileInView={"animate"}
                                key={ele.id}
                                className='border-black border-[1px]   space-y-4 p-3 md:max-w-56 lg:max-w-80 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_#6c6c6c] duration-300'>
                                <span className='text-xl border-[1px] border-black inline-block rounded-full p-4'>{ele.icon}</span>
                                <p className='font-bold text-2xl '>{ele.title}</p>
                                <p className='text-gray-500 text-xs'>{ele.description}</p>
                                <a className='inline-block border-b border-black' href={ele.link}>Learn More...</a>
                            </motion.div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Services
