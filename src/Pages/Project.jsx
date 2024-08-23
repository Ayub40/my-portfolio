import Ak from '../assets/akProject.jpg';
import StayHaven from '../assets/slider 1.jpg';
import skillShare from '../assets/digital marketing .jpg';

const Project = () => {
    const akLiveLink = () => {
        window.open('https://cosmic-pudding-032b93.netlify.app/#slide1', '_blank');
    };

    const akClientLink = () => {
        window.open('https://github.com/Ayub40/B9A10-client-side-Homely', '_blank');
    };
    const akServerLink = () => {
        window.open('https://github.com/Ayub40/B9A10-client-side-Ak-art', '_blank');
    };

    const StayHavenLiveLink = () => {
        window.open('https://tranquil-dieffenbachia-b17479.netlify.app/', '_blank');
    };
    const StayHavenClientLink = () => {
        window.open('https://github.com/Ayub40/hotel-booking-client-A11', '_blank');
    };
    const StayHavenServerLink = () => {
        window.open('https://github.com/Ayub40/hotel-booking-server-A11-', '_blank');
    };

    const skillShareLiveLink = () => {
        window.open('https://skillshare-74674.firebaseapp.com/', '_blank');
    };
    const skillShareClientLink = () => {
        window.open('https://github.com/Ayub40/b9a12-client-side-SkillShare', '_blank');
    };
    const skillShareServerLink = () => {
        window.open('https://github.com/Ayub40/b9a12-server-side-SkillShare', '_blank');
    };

    return (
        <section className="py-6 sm:py-12 mt-5 bg-[#F0F0F6] rounded-lg dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Project</h2>
                    {/* <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p> */}
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="flex flex-col dark:bg-gray-50 shadow-lg rounded-lg">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            
                        </a> */}
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500 rounded-lg" src={Ak} />
                        <div className="flex flex-col flex-1 p-6">
                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a> */}
                            <p className="font-bold">AK-ART</p>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A platform where people can buy and sell his art and craft product.The</h3>
                            <p className='mb-3'><span className='font-bold '>Technologies:</span>React, Node.js, Express.js, MongoDB.</p>
                            <h3>Features</h3>
                            <li className='list-decimal'>Specific users manage their added data</li>
                            <li className='list-decimal'>Intuitive navigation aids browsing artworks by category for detailed information per piece.
                            </li>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                <button onClick={akLiveLink} className='btn btn-sm'><span >Live link</span></button>
                                <button onClick={akClientLink} className='btn btn-sm'><span>Client link</span></button>
                                <button onClick={akServerLink} className='btn btn-sm'><span>Server link</span></button>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col dark:bg-gray-50 shadow-lg rounded-lg">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            
                        </a> */}
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500 rounded-lg" src={StayHaven} />
                        <div className="flex flex-col flex-1 p-6">
                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a> */}
                            <p className="font-bold">StayHaven</p>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A hotel booking website offering simple bookings, secure payments, and 24/7 customer support. </h3>
                            <p className='mb-3'><span className='font-bold '>Technologies:</span>React, Node.js, Express.js, MongoDB.</p>
                            <h3>Features</h3>
                            <li className='list-decimal'>Provides users with a seamless and secure booking experience.
                            </li>
                            <li className='list-decimal'>
                                Simplifies searching and booking hotels, addresses payment security issues.
                            </li>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                <button onClick={StayHavenLiveLink} className='btn btn-sm'><span >Live link</span></button>
                                <button onClick={StayHavenClientLink} className='btn btn-sm'><span>Client link</span></button>
                                <button onClick={StayHavenServerLink} className='btn btn-sm'><span>Server link</span></button>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col dark:bg-gray-50 shadow-lg rounded-lg">
                        {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            
                        </a> */}
                        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500 rounded-lg" src={skillShare} />
                        <div className="flex flex-col flex-1 p-6">
                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Convenire</a> */}
                            <p className="font-bold">AK-ART</p>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">A platform where people can buy and sell his art and craft product.The</h3>
                            <p className='mb-3'><span className='font-bold '>Technologies:</span>React, Node.js, Express.js, MongoDB.</p>
                            <h3>Features</h3>
                            <li className='list-decimal'>Specific users manage their added data</li>
                            <li className='list-decimal'>Intuitive navigation aids browsing artworks by category for detailed information per piece.
                            </li>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                <button onClick={skillShareLiveLink} className='btn btn-sm'><span >Live link</span></button>
                                <button onClick={skillShareClientLink} className='btn btn-sm'><span>Client link</span></button>
                                <button onClick={skillShareServerLink} className='btn btn-sm'><span>Server link</span></button>
                            </div>
                        </div>
                    </article>


                </div>
            </div>
        </section>
    );
};

export default Project;