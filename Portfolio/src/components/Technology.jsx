import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { DiMysql } from "react-icons/di"
import { motion } from "framer-motion"

const iconVariants = (duration)=>({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});
const Technology = () => {
  return (
<div className='border-b border-neutral-800 pb-20'>
        <motion.h1 
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 1.5}}
         className='my-20 text-center text-4xl '>Technologies</motion.h1>
    <motion.div 
    whileInView={{opacity: 1, x: 0}}
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    className='flex flex-wrap items-center justify-center gap-3'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2'>
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-2'>
            <TbBrandNextjs className="text-7xl text-white"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-2'>
            <SiMongodb className="text-7xl text-green-700"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2'>
            <DiRedis className="text-7xl text-red-800"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(4.5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2'>
            <FaNodeJs className="text-7xl text-green-700"/>
        </motion.div>

        <motion.div 
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-2'>
            <DiMysql className="text-7xl text-white"/>
        </motion.div>
    </motion.div>
</div>
  )
}

export default Technology

