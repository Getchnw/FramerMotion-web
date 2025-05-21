"use client"
import BgImage from '../../../public/assets/bg-slate.png'
import BlackCoffee from '../../../public/assets/black.png'
import Image from 'next/image'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Hero = () => {
    const bgImage = {
        backgroundImage : `url(${BgImage.src})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
    }
    const MotionImage = motion(Image);
  return (
    <>
        <motion.main
        initial = {{opacity:0 , y:-100}}
        animate = {{opacity:1 , y:0}}
        transition={{
            type: 'spring',
            stiffness:100,
            damping:10,
            delay:0.1
        }} 
        style={bgImage}>

            <section className='min-h-[750px] w-full relative'>
                <div className='container'>
                    {/* Navbar section */}
                    <Navbar />
                    {/* Hero Section ล่างNav*/}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]'>
                        {/* text section */}
                        <div className='text-light-orange mt-[100px] md:mt-0 space-y-28 p-4'>
                            <motion.h1 
                            initial = {{opacity:0 , y:-100}}
                            animate = {{opacity:1 , y:0}}
                            transition={{
                                type: 'spring',
                                stiffness:100,
                                damping:10,
                                delay:0.2
                            }}
                            className='text-3xl md:text-5xl font-bold leading-tight ml-14'>
                                Frontend Developer
                            </motion.h1>

                            <motion.div 
                            initial = {{opacity:0 , y:-100}}
                            animate = {{opacity:1 , y:0}} 
                            transition={{
                                type: 'spring',
                                stiffness:100,
                                damping:10,
                                delay:0.4
                            }}
                            className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    {/* block1 */}
                                    <h1 className='text-2xl text-primary-dark md:text-4xl font-bold'>
                                        Code  is my life
                                    </h1>
                                    <h1 className='text-sm opacity-50 leading-loose'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Sit esse eveniet nihil error ratione, beatae possimus rem ullam. Saepe, quo!
                                    </h1>
                                </div>
                                <div>
                                    <div className='absolute z-0 bg-gray-700/25 -top-6 -left-10 w-full sm:w-[440px]  h-[200px]'></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Img section */}
                        <div className='relative'>
                            {/* รูป */}
                            <MotionImage 
                            initial = {{opacity:0 , scale: 0}}
                            animate = {{opacity:1 , scale: 1}}
                            transition={{
                                type: 'spring',
                                stiffness:100,
                                damping:10,
                                delay:0.2
                            }}
                            className='relative z-40  md:h-[700px] img-shadow'
                            src = {BlackCoffee}
                            alt = 'Black Coffee'
                            ></MotionImage>
                            {/* วงกลมส้ม */}
                            <motion.div 
                            initial = {{opacity:0 , scale:0}}
                            animate = {{opacity:1 , scale:1}}
                            transition={{
                                type: 'spring',
                                stiffness:100,
                                damping:10,
                                delay:0.3
                            }}
                            className='border-[20px] border-primary rounded-full 
                            w-[180px] h-[200px] absolute top-24 -right-16 z-10'></motion.div>
                            {/* พื้นหลัง */}
                            <motion.div 
                            initial = {{opacity:0 , scale:0}}
                            animate = {{opacity:1 , scale:1}}
                            transition={{
                                type: 'spring',
                                stiffness:100,
                                damping:10,
                                delay:0.4
                            }}
                            className='absolute -top-10 left-62.5 z-1'>
                                <h1 className='text-[80px] sm:text-[120px] md:text-[200px] scale-100 text-dark-gray/40 font-bold leading-none'>
                                    Code your life</h1>
                            </motion.div>
                        </div>

                        {/* text in block  2*/}
                        <motion.div 
                        initial = {{opacity:0 , y:-100}}
                        animate = {{opacity:1 , y:0}} 
                        transition={{
                            type: 'spring',
                            stiffness:100,
                            damping:10,
                            delay:0.3
                        }}
                        className='text-light-orange mt-[100px] md:mt-0 space-y-28 p-4 '>
                            <motion.h1 
                            className='opacity-0 text-3xl md:text-5xl font-bold leading-tight ml-14'>
                                Frontend Developer
                            </motion.h1>

                            <div className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    {/* block1 */}
                                    <motion.h1 
                                    initial = {{opacity:0 , y:-100}}
                                    animate = {{opacity:1 , y:0}} 
                                    transition={{
                                        type: 'spring',
                                        stiffness:100,
                                        damping:10,
                                        delay:0.6
                                    }}
                                    className='text-2xl text-primary-dark md:text-4xl font-bold'>
                                        Code  is my life
                                    </motion.h1>
                                    <motion.h1 
                                    initial = {{opacity:0 , y:-100}}
                                    animate = {{opacity:1 , y:0}} 
                                    transition={{
                                        type: 'spring',
                                        stiffness:100,
                                        damping:10,
                                        delay:0.7
                                    }}
                                    className='text-sm opacity-50 leading-loose'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Sit esse eveniet nihil error ratione, beatae possimus rem ullam. Saepe, quo!
                                    </motion.h1>
                                </div>
                                <div>
                                    <div className='absolute z-0 bg-dark-gray/70 -top-6 left-10 w-full sm:w-[440px] h-[200px]'></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </motion.main>
    </>
  )
}
export default Hero
