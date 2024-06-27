import { RiReactjsLine } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiTrello } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { motion } from "framer-motion"
import { DiNodejs } from "react-icons/di";

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

const Tecnologies = () => {
    return (
        <div className="border-b border-nuetral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Tecnologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duratio: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>React</p>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>HTML5</p>
                    <DiHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Django</p>
                    <DiDjango className="text-7xl text-green-300" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Flask</p>
                    <SiFlask className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>MongoDB</p>
                    <DiMongodb className="text-7xl text-green-300" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>JavaScript</p>
                    <DiJavascript1 className="text-7xl text-yellow-200" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>LinuxOS</p>
                    <DiLinux className="text-7xl text-neutral-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>NodeJS</p>
                    <DiNodejs className="text-7xl text-green-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Trello</p>
                    <DiTrello className="text-7xl text-cyan-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Tecnologies