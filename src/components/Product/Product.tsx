"use client"
import { motion } from "framer-motion"
import { useState , useEffect } from "react"
import Image from "next/image"

interface ProductType {
    id : number;
    image : string;
    title : string;
    subtitle: string;
}


const Product = () => {
    
    const Productdata: ProductType[] = [
        {
            id : 1,
            image : '/assets/coffee1.png',
            title : 'Black Coffee',
            subtitle : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,'
        }
        ,{
            id : 2,
            image : '/assets/coffee3.png',
            title : 'Ice Coffee',
            subtitle : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,'
        },{
            id : 3,
            image : '/assets/coffee1.png',
            title : 'Cold Blew Coffee',
            subtitle : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,'
        },
        
    ]
    const [current, setCurrent] = useState(0);


  return (
    <>
    <motion.div 
    initial = {{opacity:0 , scale:0.5 }}
    animate = {{opacity:1 , scale:1}}
    transition={{
        type : "spring",
        stiffness : 100,
        damping : 10,
        delay: 0.3,
            }}
    className="container my-16 space-y-4 h-full">
        {/* header section */}
        <Header />

        {/* card section */}
        <Card product = {Productdata} />

        
    </motion.div>
    </>
    
  )
}
export default Product

function Header() {
    return (
        <>
            <div className="text-center max-w-lg mx-auto space-y-2">
                <motion.h1 
                initial = {{opacity:0 , y:-100}}
                animate = {{opacity:1 , y:0}}
                transition={{
                    type: 'spring',
                    stiffness:100,
                    damping:10,
                    delay:0.2
                }}
                className="text-3xl font-bold text-light-gray">
                    Frest and
                    <span className="text-primary "> Tasty Coffee</span>
                </motion.h1>
                <motion.p 
                initial = {{opacity:0 , y:-100}}
                animate = {{opacity:1 , y:0}}
                transition={{
                    type: 'spring',
                    stiffness:100,
                    damping:10,
                    delay:0.4
                }}
                className="text-sm opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis vero fugiat non ex? Eveniet omnis perspiciatis sint inventore quos!</motion.p>
           
            </div>
        </>
    )
}

interface CardType {
   product : ProductType; 
}

function Card( {product} : {product:CardType}) {
    return (
        <>
            <motion.div 
            initial = {{opacity:0 , y:100 }}
            animate = {{opacity:1 , y:0}}
            transition={{
                type : "spring",
                stiffness : 100,
                damping : 10,
                delay: 0.2,
            }}
            className="grid grid-cols-1  md:grid-cols-3 gap-8">
                
                {
                    product.map((item : ProductType) => (
                        <div key={item.id}
                        className="flex flex-col items-center justify-center border rounded-2xl p-4 shadow-2xl border-white/50"
                        >
                            <Image 
                            className="img-shadow2 max-w-[200px]  hover:scale-115 transition-all duration-300 curser-pointer"
                            src = {item.image}
                            alt = {item.title}
                            width = {200}
                            height = {100}
                            />
                            <div className="flex flex-col items-center justify-center mt-8 ">
                                <h2 className="text-xl font-bold text-primary">{item.title}</h2>
                                <p className="text-center">{item.subtitle}</p>
                            </div>
                        
                        </div>
                    ))
                }
            </motion.div>
        </>
    )

}

