import { MdComputer } from 'react-icons/md';
import  FooterImg from '../assets/footer.jpg';
import { FooterData } from '../data/FooterData';
import { NavbarData } from '../data/data';

const FooterBg = {
    backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
};

const Footer = () => {
  return (
    <div style={FooterBg} className='rounded-t-3xl'>
        <div className="bg-primary/5">
            <div className="container">
                <div className="grid py-5 text-black border-t-2 md:grid-cols-4 md:gap-4 border-gray-300/10">
                    {/* brand info section */}
                    <div className="px-4 py-8 space-y-4">
                        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
                            <MdComputer className='text-4xl text-secondary' />
                            <p className="">E-Tuter</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nulla totam quidem optio eius voluptates corrupti. 
                        </p>
                        <div className="flex items-center justify-start gap-5 !mt-6">
                            {FooterData.map((data) => (
                                <a key={data.id} href={data.link}>
                                    <div className="text-3xl">{data.icon}</div>
                                </a>
                            ))}
                        </div>  
                    </div>
                    {/* link section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14">
                        <div className="px-4 py-8">
                            <h1 className="mb-5 text-xl font-bold text-justify sm:text-xl sm:text-left">
                                Important Links
                            </h1>
                            <ul className='flex flex-col gap-3'>
                                {NavbarData.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className="duration-200 hover:text-secondary">
                                            {data.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer