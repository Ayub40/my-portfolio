

const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-[#F0F0F6] rounded-lg dark:text-gray-800">
            <h2 className="mb-8 text-4xl font-bold leading-none text-center">About Me</h2>
            <p className="text-xl font-medium text-center mb-4"> I specialize in web development, with strong skills in HTML, CSS, JavaScript, and React. I am passionate about creating user-friendly, responsive, and interactive websites. My goal is to continue developing innovative web solutions that enhance user experience and push the boundaries of what’s possible on the web.</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <div className="flex items-center">
                        <span className="lg:ml-4 font-bold">Name</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Ayub Khan</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center lg:ml-9">
                        <span className="lg:ml-4 font-bold">Email</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>ayubk4028@gmail.com</span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center lg:ml-7">
                        <span className="lg:ml-4 font-bold">Education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>B.Sc. Honors in Physics</span>
                    </div>

                </div>
            </div>
        </div>


        // <section className="py-6 bg-[#F0F0F6] dark:text-gray-900">
        //     <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        //         <h1 className="text-5xl font-bold leading-none text-center">About Me</h1>
        //         <p className="text-xl font-medium text-center"> I specialize in web development, with strong skills in HTML, CSS, JavaScript, and React. I am passionate about creating user-friendly, responsive, and interactive websites. My goal is to continue developing innovative web solutions that enhance user experience and push the boundaries of what’s possible on the web.</p>
        //         <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">

        //             <div className="grid lg:grid-cols-4 md:gird-cols-2 lg:gap-28 md:gap-2 ">
        //                 <div className="">
        //                     <h3 className="lg:ml-4 font-bold">Name</h3>
        //                     <p className="">Ayub Khan</p>
        //                 </div>
        //                 <div>
        //                     <h3 className="lg:ml-4 font-bold">Email</h3>
        //                     <p>ayubk@gmail.com</p>
        //                 </div>
        //                 <div>
        //                     <h3 className="lg:ml-4 font-bold">Contact</h3>
        //                     <p>01688871098</p>
        //                 </div>

        //                 <div>
        //                     <h3 className="lg:ml-4 font-bold">From</h3>
        //                     <p>Bangladesh</p>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </section>
    );
};

export default About;