import { MdComputer, MdMenu } from "react-icons/md"
import { NavbarData } from "../data/data"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <div className="container flex justify-between items-center py-6">
                {/* logo section */}
                <div className="text-2xl flex items-center gap-2 font-bold">
                    <MdComputer className="text-3xl text-secondary" />
                    <p>E-Tutor</p>
                </div>
                {/* menu section */}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-6">
                        {NavbarData.map((data) => (
                            <li key={data.id}>
                                <a 
                                    href={data.link} 
                                    className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                                >
                                    {data.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* button section */}
                <div className="hidden lg:block space-x-6">
                    <button className="font-semibold">
                        Sign in
                    </button>
                    <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
                        Register
                    </button>
                </div>
                {/* hamburger menu */}
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <MdMenu className="text-4xl" />
                    <AnimatePresence mode="wait">
                    {isOpen && 
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
                    >
                        <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
                            <ul className="flex flex-col justify-center items-center gap-10">
                                {NavbarData.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link}>{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>}
                </AnimatePresence>
                </div>  
            </div>
        </motion.nav>
    </>
  )
}

export default Navbar