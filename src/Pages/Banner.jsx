import { Link } from 'react-router-dom';
import pic from '../assets/WhatsApp_Image_2024-08-22_at_04.11.40_1ebed88e-removebg-preview.png'
import { GoDownload } from "react-icons/go";
import resume from '../assets/Ayub Khan (1).pdf';

const Banner = () => {

    const handleDownload = () => {
        window.open('https://drive.google.com/file/d/1jhNFSK5cr5wvnyuYUh9qm_A6tbvGOl7L/view?usp=sharing', '_blank');
    };

    return (
        <div className="hero bg-[#F0F0F6] rounded-lg mt-3 lg:h-[467px] lg:w-[1280px] mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
                <img
                    src={pic}
                    className="max-w-sm" />
                <div className="">
                    <h1 className="text-5xl font-bold">Hi 👋, <br /></h1>
                    <h1 className="text-5xl font-bold">I’m Ayub Khan <br />
                        <span className="text-[#FFB400]">Front-end</span> Developer </h1>
                    <p className="py-6 ">
                        {/* I, m a designer & developer with a passion for web design. I enjoy <br /> developing simple, clean and slick websites that provide real value <br /> to the end user. */}
                        Building Responsive and Interactive Web Experiences
                    </p>
                    <Link>
                        <button onClick={handleDownload} className="btn bg-[#FFB400] p-4 pr-6 text-black">
                            {/* <a href="https://drive.google.com/file/d/1jhNFSK5cr5wvnyuYUh9qm_A6tbvGOl7L/view?usp=sharing" download="Ayub_Khan_Resume.pdf">Resume</a> */}
                            <a href={resume} download="Ayub_Khan_Resume.pdf">Resume</a>
                            <GoDownload className='text-black' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;