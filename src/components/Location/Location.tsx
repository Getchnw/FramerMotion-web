"use client"
import { motion } from "framer-motion"

const Location = () => {
  return (
    <>
    <div className="container my-36 ">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-x-14">
            {/* form ection */}
            <Form />
            {/* GPS ection */}
            <Gps />
        </div>
    </div>
    </>
  )
}
export default Location

const Form = () => {
    return (
        <>
        <div className="space-y-3 lg:w-[500px]">
            <motion.h1 
            initial = {{opacity:0 , y:100 }}
            whileInView = {{opacity:1 , y:0}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping : 10,
                delay: 0.1,
            }}
            className="text-3xl text-center font-bold text-gray-600 ">
                Buy our Product from anyhere!
            </motion.h1>
            <motion.div 
            initial = {{opacity:0 , y:100 }}
            whileInView = {{opacity:1 , y:0}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping : 10,
                delay: 0.2,
            }}
            className="flex items-center justify-center gap-4">
                <input 
                placeholder="Name"
                type="text" 
                className="input-style w-full lg:w-[200px] 
                focus:outline-none border focus:border-primary"
                />
                <input 
                placeholder="Email"
                type="email" 
                className="input-style w-full 
                focus:outline-none border focus:border-primary"
                />
            </motion.div>
            <motion.div 
            initial = {{opacity:0 , y:100 }}
            whileInView = {{opacity:1 , y:0}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping : 10,
                delay: 0.3,
            }}
            className="flex items-center justify-center gap-4">
                <input 
                placeholder="Country"
                type="text" 
                className="input-style w-full 
                focus:outline-none border focus:border-primary"
                />
                <input 
                placeholder="Zipcode"
                type="text" 
                className="input-style w-full lg:w-[200px] 
                focus:outline-none border focus:border-primary"
                />
            </motion.div>
            <motion.button 
            initial = {{opacity:0 , y:100 }}
            whileInView = {{opacity:1 , y:0}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping : 10,
                delay: 0.4,
            }}
            className="btn-style w-full shadow-xl">
                สั่งเลย
            </motion.button>
        </div>
        </>
    )
}

const Gps = () => {
    const gpsMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15508.537411947696!2d100.47231425541992!3d13.649590200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a38b54c4136f%3A0x434d89dc4af01d3e!2sJaross%20Coffee!5e0!3m2!1sth!2sth!4v1747672966610!5m2!1sth!2sth" 
    return(
        <>
        <motion.div 
        initial = {{opacity:0 , scale:0.5 }}
            whileInView = {{opacity:1 , scale:1}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping : 10,
                delay: 0.1,
            }}
        className="">
            <iframe
            className="rounded-xl w-full h-[300px] sm:w-[300px] sm:h-[300px] md:h-[250px] overflow-hidden shadow-2xl mx-auto"
            src={gpsMap}
            width={600}
            height={450}
            style={{border:2 , borderRadius:"0.5rem"}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </motion.div>
        </>
    )
}