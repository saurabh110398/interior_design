import React from 'react'
import Logo from '../../assets/Logo.png'

const NavLinks = [
    {
        id: 1,
        title: 'About',
        link: '#'
    },
    {
        id: 2,
        title: 'Services',
        link: '#'
    },
    {
        id: 3,
        title: 'Project',
        link: '#'
    },
    {
        id: 4,
        title: 'Contact',
        link: '#'
    }
]

const Navbar = () => {
    return (
        <>
            <div className="container py-2 flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className='w-10 sm:w-16 lg:w-20' src={Logo} alt="logo img" />
                    <span className="font-bold text-3xl">Interior</span>
                </div>
                <div className='hidden md:block'>
                    {NavLinks.map(ele => {
                        return <a className='mx-4  text text-sm font-semibold' href={ele.link}>{ele.title}</a>
                    })}
                </div>
                <div>
                    <button className='shadow-[8px_7px_4px_0px] duration-300 hover:bg-black hover:text-white text-sm lg:text-base border-[1px] border-black px-4 py-2'>Try For Free</button>
                </div>
            </div>

        </>
    )
}

export default Navbar
