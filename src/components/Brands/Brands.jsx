import React from 'react'
import b1 from '../../assets/brand/1.png'
import b2 from '../../assets/brand/2.png'
import b3 from '../../assets/brand/3.png'
import b4 from '../../assets/brand/4.png'
import b5 from '../../assets/brand/5.png'

const Brands = () => {
    return (
        <div className="container">
            <div
                className='flex flex-wrap justify-center lg:justify-between gap-4'
            >
                <img className=' ' src={b1} alt="" />
                <img src={b2} alt="" />
                <img src={b3} alt="" />
                <img src={b4} alt="" />
                <img src={b5} alt="" />
            </div>
        </div>
        //     <div
        
        // className='container w-48 sm:w-fit 
        // space-y-2 flex flex-col 
        // flex-wrap justify-center items-center 
        //  my-20  sm:grid sm:grid-cols-2 
        //  md:grid-cols-3 lg:grid-cols-5'
        //  >
        //         <img className=' ' src={b1} alt="" />
        //         <img src={b2} alt="" />
        //         <img src={b3} alt="" />
        //         <img src={b4} alt="" />
        //         <img src={b5} alt="" />
        //     </div>
    )
}

export default Brands
