import Slider from "react-slick";
import { setting } from "../utils/setting";
import { TestimonialData } from "../data/data";

const Testimonial = () => {
  return (
    <>
        <div className="mb-10 py-14">
            <div className="container">
                {/* text section */}
                <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
                    <h1 className="font-semibold text-orange-600 uppercase">
                        OUR TESTIMONIALS
                    </h1>
                    <p className="text-3xl font-semibold">
                        What Our Students Say About Us
                    </p>
                </div>
                {/* card section */}
                <div>
                    <Slider {...setting} >
                        {TestimonialData.map((data) => (
                            <div key={data.id}>
                                <div className="flex flex-col gap-4 p-8 mx-4 shadow-lg rounded-xl bg-secondary/10">
                                    <div className="flex items-center justify-start gap-5">
                                        <img 
                                            src={data.img} 
                                            alt="" 
                                            className="w-16 h-16 rounded-full" 
                                        />
                                        <div className="">
                                            <p className="text-xl font-bold text-black/80">
                                                {data.name}
                                            </p>
                                            <p>
                                                {data.name}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="py-6 space-y-4">
                                        <p className="text-sm text-gray-500">
                                            {data.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial