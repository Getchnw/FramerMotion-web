"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const Bander = () => {
    const BannerImg = "/assets/coffee-cover.jpg"
    const Appstore = "/assets/app_store.png"
    const Playstore = "/assets/play_store.png"
    const Bannerstyle = {
        backgroundImage : `url(${BannerImg})`,
        backgroundSize : "cover",
        backgroundPosition : "center",
        backgroundRepeat : "no-repeat",
        height : "100%",
        width : "100%"
    } 

    const MotionImg = motion(Image)

  return (
    <>
        <div
        className="container my-14">

            <motion.div
            initial = {{opacity:0 , scale:0.5}}
            whileInView = {{opacity:1 , scale:1}}
            transition={{
                type : 'spring',
                stiffness : 100,
                damping : 10,
                delay: 0.2,
            }}
            style={Bannerstyle}
            className="sm:min-h-[400px] flex items-center 
            justify-center md:justify-end bg-center px-4 py-6 sm:px-8 sm:py-12 
            shadow-sm"
            >
                <div className="max-w-xl">
                    <div className="max-w-xl space-y-4 lg:space-y-6">
                        <motion.h1 
                        initial = {{opacity:0 , scale:0.5}}
                        whileInView = {{opacity:1 , scale:1}}
                        transition={{
                            type : 'spring',
                            stiffness : 100,
                            damping : 10,
                            delay: 0.3,
                        }}
                        className="text-xl sm:text-3xl font-semibold text-center">Download the app</motion.h1>
                        <motion.p 
                        initial = {{opacity:0 , scale:0.5}}
                        whileInView = {{opacity:1 , scale:1}}
                        transition={{
                            type : 'spring',
                            stiffness : 100,
                            damping : 10,
                            delay: 0.4,
                        }}
                        className="text-center text-gray-600 sm:px-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, dicta?</motion.p>

                        {/* section img */}
                        <div className="flex justify-center items-center gap-4">
                            <Link
                            href={"#"}
                            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                            >
                                <MotionImg 
                                initial = {{opacity:0 , y:100}}
                                whileInView = {{opacity:1 , y:0}}
                                transition={{
                                    type : 'spring',
                                    stiffness : 100,
                                    damping : 10,
                                    delay: 0.4,
                                }}
                                src={Appstore}
                                alt="Appstore"
                                width={200}
                                height={200}
                                ></MotionImg>
                            </Link>
                            <Link
                            href={"#"}
                            className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                            >
                                <MotionImg 
                                initial = {{opacity:0 , y:100}}
                                whileInView = {{opacity:1 , y:0}}
                                transition={{
                                    type : 'spring',
                                    stiffness : 100,
                                    damping : 10,
                                    delay: 0.6,
                                }}
                                src={Playstore}
                                alt="Appstore"
                                width={200}
                                height={200}
                                ></MotionImg>
                            </Link>
                        </div>
                    </div>
                
                </div>
            </motion.div>
        
        </div>
    </>
    
  )
}
export default Bander