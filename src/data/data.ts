interface Navbar {
    id: number;
    title: string;
    link: string;
}

interface Subject {
    id: number;
    name: string;
    link: string;
    color: string;
    delay: number;
}

interface Testiminal {
    id: number;
    name: string;
    text: string;
    img: string;
    delay: number;
}

export const NavbarData: Navbar[] = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "For Students",
        link: "#"
    },
    {
        id: 3,
        title: "Resources",
        link: "#"
    },
    {
        id: 4,
        title: "About Us",
        link: "#"
    },
    {
        id: 5,
        title: "Contact Us",
        link: "#"
    },
]

export const SubjectData: Subject[] = [
    {
        id: 1,
        name: "Engineering",
        link: "#",
        color: "#0063ff",
        delay: 0.2
    },
    {
        id: 2,
        name: "English",
        link: "#",
        color: "#00c986",
        delay: 0.4
    },
    {
        id: 3,
        name: "Programming",
        link: "#",
        color: "#922aee",
        delay: 0.4
    },
    {
        id: 4,
        name: "Science",
        link: "#",
        color: "#ea7516",
        delay: 0.5
    },
    {
        id: 5,
        name: "History",
        link: "#",
        color: "#075267",
        delay: 0.6
    },
    {
        id: 6,
        name: "Psychology",
        link: "#",
        color: "#986d1d",
        delay: 0.7
    },
    {
        id: 7,
        name: "Web design",
        link: "#",
        color: "#b93838",
        delay: 0.8
    },
    {
        id: 8,
        name: "See all",
        link: "#",
        color: "#464646",
        delay: 0.9
    },
]

export const TestimonialData: Testiminal[] = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum facilis modi adipisci voluptatibus laudantium",
        img: "http://picsum.photos/101/101",
        delay: 0.2,
    },
    {
        id: 2,
        name: "Stive Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum facilis modi adipisci voluptatibus laudantium",
        img: "http://picsum.photos/102/102",
        delay: 0.5,
    },
    {
        id: 3,
        name: "Kristen",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum facilis modi adipisci voluptatibus laudantium",
        img: "http://picsum.photos/103/103",
        delay: 0.8,
    },
    {
        id: 4,
        name: "Arina",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum facilis modi adipisci voluptatibus laudantium",
        img: "http://picsum.photos/104/104",
        delay: 1.1,
    },
]