import { motion } from "framer-motion";
import Img1 from "../assets/banner1.png";
import Img2 from "../assets/banner2.png";
import { SlideUp } from "../utils/animation";

const Banner = () => {
  return (
    <div className="bg-[#f9f9f9] pb-14">
        <div className="container">
            <div className="grid space-y-6 gric1 md:grid-cols-2 md:space-y-0">
                {/* image section */}
                <div className="flex items-center justify-start">
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity:1 , scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        src={Img1} 
                        alt="" 
                        className="w-[400px] h-full object-cover" 
                    />
                </div>
                {/* text section */}
                <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                    <motion.p 
                        variants={SlideUp(0.5)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="text-sm font-semibold text-orange-600 capitalize"
                    >
                        CUSTOMIZE WITH YOUR SCHEDULE
                    </motion.p>
                    <motion.p 
                        variants={SlideUp(0.7)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="text-xl font-semibold capitalize lg:text-2xl"
                    >
                        Personalized Professional Online Tutor on Your Schedule
                    </motion.p>
                    <motion.p 
                        variants={SlideUp(0.9)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="text-sm text-slate-500"
                    >
                        Our scheduling system allows you to select based on your free time. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto unde quidem hic architecto, porro reprehenderit. Dolorem et aliquid assumenda placeat, adipisci quidem amet unde? Libero odit provident ea temporibus!
                    </motion.p>
                    <motion.div 
                        variants={SlideUp(1.1)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="flex justify-center md:justify-start"
                    >
                        <button className="primary-btn !mt-5">Get Started</button>
                    </motion.div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="grid space-y-6 gric1 md:grid-cols-2 md:space-y-0">
                {/* text section */}
                <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                    <motion.p 
                        variants={SlideUp(0.5)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="text-sm font-semibold text-orange-600 capitalize"
                    >
                        CUSTOMIZE WITH YOUR SCHEDULE
                    </motion.p>
                    <motion.p 
                        variants={SlideUp(0.7)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="text-xl font-semibold capitalize lg:text-2xl"
                    >
                        Personalized Professional Online Tutor on Your Schedule
                    </motion.p>
                    <motion.p 
                        variants={SlideUp(0.9)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="text-sm text-slate-500"
                    >
                        Our scheduling system allows you to select based on your free time. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iusto unde quidem hic architecto, porro reprehenderit. Dolorem et aliquid assumenda placeat, adipisci quidem amet unde? Libero odit provident ea temporibus!
                    </motion.p>
                    <motion.div 
                        variants={SlideUp(1.1)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="flex justify-center md:justify-start"
                    >
                        <button className="primary-btn !mt-5">Get Started</button>
                    </motion.div>
                </div>
                {/* image section */}
                <div className="flex items-center justify-start">
                    <motion.img 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity:1 , scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        src={Img2} 
                        alt="" 
                        className="w-[400px] h-full object-cover" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner