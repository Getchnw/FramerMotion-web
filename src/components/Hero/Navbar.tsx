'use client'
import { GiHamburgerMenu } from "react-icons/gi"
import { motion,AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaX } from "react-icons/fa6"


const Navbar = () => {
    const [sidebar,setsidebar] = useState(false);
  return (
    <>
        <nav className="absolute top-0 left-0 w-full pt-8 z-40">
            <div className="container flex justify-between px-10 items-center text-white">
                <div>
                    {/* Logo section */}
                    <motion.h1 
                    initial = {{opacity:0 , y:-100}}
                    animate = {{opacity:1 , y:0}}
                    transition={{ 
                        type: 'spring',
                        stiffness:100,
                        damping:10,
                        delay:0.3
                    }}
                    className="text-2xl  font-semibold uppercase tracking-wider">
                        <span className="text-primary">Cafe</span> Workshop
                    </motion.h1>
                </div>
                <motion.div
                initial = {{opacity:0 , y:-100}}
                    animate = {{opacity:1 , y:0}}
                    transition={{
                        type: 'spring', 
                        stiffness:100,
                        damping:10,
                        delay:0.3
                    }}
                >
                    {/* humberger */}
                    <GiHamburgerMenu 
                    onClick = {() => setsidebar(!sidebar)}
                    className="cursor-pointer text-2xl"/>
                    
                </motion.div>
            </div>
        </nav>

        <AnimatePresence>
            {sidebar && (
                <motion.div 
                initial = {{opacity:0 , x:100}}
                animate = {{opacity:1 , x:0}}
                exit={{opacity:0 , x:100}} //ออก
                transition={{
                    type: 'spring',
                    stiffness:100,
                    damping:10,
                    delay:0.3
                }}

                className="absolute top-0 right-0 w-[140px] h-full 
                bg-gradient-to-b from-primary/80 to-primary-dark/80 
                backdrop-blur-sm z-10">
                    <div className="w-full h-full items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-6 h-full">
                            {/* line */}
                            <div className="w-[1px] h-[70px] bg-white/50"></div>

                            {/* social icon 1*/}
                            <div className="inline-block p-2 rounded-full cursor-pointer border">
                                <FaFacebookF  />
                            </div>
                            {/* social icon 2*/}
                            <div className="inline-block p-2 rounded-full cursor-pointer border">
                                <FaX  />
                            </div>
                            {/* social icon 3*/}
                            <div className="inline-block p-2 rounded-full cursor-pointer border">
                                <FaInstagram  />
                            </div>

                            {/* line2 */}
                            <div className="w-[1px] h-[70px] bg-white/50"></div>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}
export default Navbar