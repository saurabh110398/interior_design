import React from 'react'
import hero from '../../assets/hero.png';
import b1 from '../../assets/brand/1.png'
import b2 from '../../assets/brand/2.png'
import b3 from '../../assets/brand/3.png'
import b4 from '../../assets/brand/4.png'
import b5 from '../../assets/brand/5.png'

const Hero = () => {
    return (
        <>
            <div className='container my-20 flex flex-col md:flex-row w-full space-y-4 '>
                <div className="flex text-center md:text-start flex-col w-full md:w-1/2 space-y-4">

                    <div className='font-bold text-2xl  md:text-4xl font-serif'>
                        <span>SKETCH LUXURY INTEROR DESIGN</span>
                    </div>
                    <div className='text-md  md:text-lg  font-serif text-gray-500'>
                        <span>Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</span>

                    </div>
                    <div className='flex space-x-5 justify-center md:justify-start'>
                        <button  className='primary-btn bg-black text-white'>Get Started</button>
                        <button className=' primary-btn  text-black'>Contact US</button>
                        <button className='primary-btn'>Try For Free</button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 my-4 object-cover'>
                    <img src={hero} alt="" />
                </div>
            </div>

           
        </>

    )
}

export default Hero
