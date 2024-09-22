import { ReactNode } from "react";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

interface WhyChoose {
    id: number;
    title: string;
    desc: string;
    link: string;
    icon: ReactNode;
    bgColor: string;
    delay: number;
}

export const WhyChooseData: WhyChoose[] = [
    {
        id: 1,
        title: "One-on-one Teaching",
        desc: "All of our special education experts have a degree in special education.",
        link: "/",
        icon: <GrYoga />,
        bgColor: "#0063ff",
        delay: 0.3,
    },
    {
        id: 2,
        title: "24/7 Tutor Availability",
        desc: "Our tutors are always available to respend as quick as possible for you.",
        link: "/",
        icon: <FaDumbbell />,
        bgColor: "#73bc00",
        delay: 0.6,
    },
    {
        id: 3,
        title: "Interactive Whiteboard",
        desc: "Our digital whiteboard equipped with audio and video chat fetures.",
        link: "/",
        icon: <GiGymBag />,
        bgColor: "#fa6400",
        delay: 0.9,
    },
    {
        id: 4,
        title: "Affordable Prices",
        desc: "Choose an expert tutor based on your budget and per hour.",
        link: "/",
        icon: <GiGymBag />,
        bgColor: "#fe6baa",
        delay: 1.2,
    },
]