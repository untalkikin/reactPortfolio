import { motion } from "framer-motion"
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { FaCss3 } from "react-icons/fa";

const iconVariants = (duratoion) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duratoion,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Lenguajes = () => {
    return (
        <div className="border-b border-nuetral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Programming Lenguages
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duratio: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>JavaScript</p>
                    <DiJavascript1 className="text-7xl text-yellow-200" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>TypeScript</p>
                    <SiTypescript className="text-7xl text-cyan-700" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Python</p>
                    <DiPython  className="text-7xl text-neutral-400" />
                </motion.div>
                                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>C#</p>
                    <TbBrandCSharp className="text-7xl text-blue-500" />
                </motion.div>
                                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>SQL</p>
                    <TbSql className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>HTML</p>
                    <DiHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>CSS</p>
                    <FaCss3 className="text-7xl text-blue-500" />
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Lenguajes