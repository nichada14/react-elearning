import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

interface Footer {
    id: number;
    icon: ReactNode;
    link: string;
}

export const FooterData: Footer[] = [
    {
        id: 1,
        icon: <HiLocationMarker />,
        link: "#"
    },
    {
        id: 2,
        icon: <FaInstagram />,
        link: "#"
    },
    {
        id: 3,
        icon: <FaFacebook />,
        link: "#"
    },
    {
        id: 4,
        icon: <FaLinkedinIn />,
        link: "#"
    },
]