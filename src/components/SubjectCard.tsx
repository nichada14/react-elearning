import { FaBook } from "react-icons/fa";
import { SubjectData } from "../data/data";
import { motion } from "framer-motion";

const SubjectCard = () => {
  return (
    <>
        <div className="container py-14 md:py-24">
            {/* text section */}
            <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
                <h1 className="font-semibold text-orange-500 uppercase">
                    Our tutor subjects
                </h1>
                <p className="text-3xl font-semibold">
                    Find Online Tutor in Any Subject
                </p>
            </div>
            {/* cards section */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {SubjectData.map((data) => (
                    <motion.div 
                        key={data.id} 
                        initial={{ opacity:1, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, delay: data.delay }}
                        className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
                    >
                        <div 
                            style={{ color: data.color, backgroundColor: data.color + "20" }}
                            className="flex items-center justify-center w-10 h-10 rounded-md"
                        >
                            <FaBook />
                        </div> 
                        <p>{data.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </>
  )
}

export default SubjectCard