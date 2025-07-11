import { DiTrello } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { motion } from "framer-motion"
import { FaWindows } from "react-icons/fa6";
import { SiMacos } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";


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
                Other Tecnologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duratio: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>LinuxOS</p>
                    <DiLinux className="text-7xl text-neutral-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Trello</p>
                    <DiTrello className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Windows OS</p>
                    <FaWindows className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>MAC OS</p>
                    <SiMacos  className="text-7xl text-white" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Git</p>
                    <FaGit  className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Git Hub</p>
                    <FaGithub  className="text-7xl text-white" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate" className="rounded-2xl border-4 border-nuetral-800 p-4">
                    <p className='text-bold text-center text-color-white'>Firebase</p>
                    <IoLogoFirebase className="text-7xl text-orange-500" />
                </motion.div>
            </motion.div>
        </div>
    )
}
export default Tecnologies