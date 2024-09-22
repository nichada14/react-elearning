import { motion } from "framer-motion"
import { WhyChooseData } from "../data/WhyChooseData"
import { SlideLeft } from "../utils/animation"


const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
        <div className="container py-24">
            {/* header section */}
            <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
                <h1 className="font-semibold text-orange-600 uppercase">
                    Why Choose Us 
                </h1>
                <p className="text-3xl font-semibold">
                    Benefits of online tutoring services with us
                </p>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {WhyChooseData.map((data) => (
                    <motion.div 
                        key={data.id}
                        variants={SlideLeft(data.delay)}
                        initial="hidden"
                        whileInView={"visible"}
                        className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                    >
                        <div
                            style={{ backgroundColor: data.bgColor }}
                            className="flex items-center justify-center w-10 h-10 text-white rounded-lg"
                        >
                            <div className="text-2xl">{data.icon}</div>
                        </div>
                        <p className="font-semibold">{data.title}</p>
                        <p className="text-sm text-gray-500">{data.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs