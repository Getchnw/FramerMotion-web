"use client"
import {
    FaFacebook,
    FaInstagram,
    FaGoogle,
    FaPhone,
    FaTelegram
} from 'react-icons/fa';
import { FaMapLocation
 } from 'react-icons/fa6';
import {motion} from 'framer-motion';
import Image from 'next/image';

const CreditCardIMG = '/assets/creditCard.png';
    const Scbimg = '/assets/scb.png';
    const Kbankimg = '/assets/kbank.png';

const Footer = () => {
    
  return (
    <>
        <motion.div 
        initial = {{opacity:0 , y:100 }}
        whileInView = {{opacity:1 , y:0}}
        viewport={{once:true ,amount:0.5}}

        transition={{
            delay: 0.2,
            duration: 0.3
        }}
        className='bg-gradient-to-t from-primary to-primary-dark py-12 text-white'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                    {/* company detail */}
                    <CompanyDetail />
                    {/* LInk detail */}
                    <FooterLink />
                    <div className='space-y-6'>
                        {/* Social detail */}
                        <SocialDetail />
                        {/* Payment detail */}
                        <PaymentDetail />
                    </div>
                </div>
                <div className='border-b mt-4 pt-4'></div>
                <p className='text-center mt-4 pt-4'>Copyright &copy; 2025 Motion Framer </p>
            </div>
        </motion.div>
    </>
    
  )
}
export default Footer

const CompanyDetail = () => {
    return(
        <motion.div 
        initial = {{opacity:0 , y:100 }}
        whileInView = {{opacity:1 , y:0}}
        transition={{
            delay: 0.3,
            duration: 0.3
        }}
        className='space-y-6'>
            <h1 className='text-3xl font-blod uppercase  '>
                MOtion Coder
            </h1>
            <p className='text-sm max-w-[300px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt quibusdam eos obcaecati? Vitae, ad. Illo nostrum saepe officia, quisquam fugiat quo atque ea natus qui officiis eveniet fuga totam.</p>
            <div className='space-y-2'>
                
                    <p className='flex item-center gap-2'>
                        <FaPhone />
                        +66 1234 5678
                    </p>
                    <p className='flex item-center gap-2'>
                        <FaMapLocation/>
                        12 Sukhumvit Rd, Bangkok
                    </p>
                
            </div>
        </motion.div>
    )
}

const FooterLink = () => {
    return(
        <>
            <motion.div
            initial = {{opacity:0 , y:100 }}
        whileInView = {{opacity:1 , y:0}}
        transition={{
            delay: 0.4,
            duration: 0.3
        }}
        className='space-y-4'>
            
                <h1 className='text-3xl font-bold uppercase tracking-wider '>
                    Quick Links
                </h1>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact as</p>
                        <p>Privacy</p>
                        <p>Policy</p>
                    </div>
                    <div className='space-y-2'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact as</p>
                        <p>Privacy</p>
                        <p>Policy</p>
                    </div>
                </div>
            </motion.div>
            </>
    )
}

const SocialDetail = () => {
    return(
        <motion.div
        initial = {{opacity:0 , y:100 }}
        whileInView = {{opacity:1 , y:0}}
        transition={{
            delay: 0.5,
            duration: 0.3
        }}
        className='space-y-4'>
            <h1 className='text-xl font-bold uppercase tracking-wider'>
                Follow Us
            </h1>
            <div className='flex items-center gap-4'>
                <FaFacebook className='text-3xl hover:scale-110 transition-all duration-300'/>
                <FaInstagram className='text-3xl hover:scale-110 transition-all duration-300'/>
                <FaTelegram className='text-3xl hover:scale-110 transition-all duration-300'/>
                <FaGoogle className='text-3xl hover:scale-110 transition-all duration-300'/>
            </div>
        </motion.div>
    )
}

const PaymentDetail = () => {
    return(
        <>
        <motion.div
        initial = {{opacity:0 , y:100 }}
        whileInView = {{opacity:1 , y:0}}
        transition={{
            delay: 0.5,
            duration: 0.3
        }}
        className='space-y-4'>
            <h1 className='text-xl font-bold uppercase tracking-wider'>
                Payment Method
            </h1>
            <div className='flex items-center gap-4'>
                <Image src={Scbimg} alt="scb" width={60} height={60} />
                <Image src={Kbankimg} alt="kbank" width={60} height={60} />
                <Image src={CreditCardIMG} alt="credit card" width={60} height={60} />
            </div>
        </motion.div>
        </>
    )
}