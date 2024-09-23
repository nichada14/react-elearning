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