'use client';
import Image from 'next/image';
import alex from "../images/alex.jpg";
import roblillis from "../images/roblillis.jpg";
import peter from "../images/peter.jpg";
import shimaila from "../images/shimaila.jpg";
import skyler from "../images/skyler.jpeg";
import sebastian from "../images/sebastian.jpg";
import renderedrover from "../images/renderedrover.jpg";
import habitatmold from "../images/habitatmold.png";
import roverparts from "../images/roverparts.gif";
import roverwalk from "../images/roverwalk.gif";
import React, { useState, useEffect } from "react";

import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

const MainPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 300;

            if (scrollY > threshold) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return (
        <div className="bg-slate-400 min-h-screen flex flex-col items-center overflow-auto">
            <div className="fixed top-40 left-1/2 transform -translate-x-1/2 text-center z-50">
                {isVisible && (
                    <h1 className="text-white text-7xl font-[geist]">
                        Mars Habitat at Berkeley
                    </h1>
                )}
            </div>

            <div className="relative w-75 min-h-screen bg-orange-100 bg-opacity-80 rounded-xl shadow-md z-50 flex flex-col items-center mt-[350px]">
                <p className="pt-10 font-bold text-4xl text-stone-950 text-center">Mission Statement:</p>
                <p className="text-xl px-10 justify-center break-normal text-center text-slate-700">
                    Mars Habitat at Berkeley is UC Berkeley’s official student-run engineering and science Mars Habitat team. 
                    Our purpose is to help establish a human presence on Mars, through building a community of everyone, including 
                    makers, engineers, designers, aspiring astronauts. Our initial goal is to design, build, and test a 3D printed Mars 
                    Habitat in a harsh environment that mimics Mars’, such as the Mojave Desert in California. In addition, we aim to construct said 
                    habitat autonomously, to show that the habitat can be built before astronauts arrive. Through group discussions, divisions (e.g. mechanical, electrical, etc.), 
                    and social events, Mars Habitat at Berkeley will foster a community of future builders in the space economy and Moon/Martian economy.
                </p>
                <hr className="w-10 border-t-2 border-slate-700 my-4" />
                <div id="about">
                    <p className="pt-10 font-bold text-4xl text-stone-950 text-center">About Us:</p>
                    <p className="text-xl px-10 justify-center break-normal text-center text-slate-700">
                        We are a group of talented engineers, ranging from engineers and scientists to designers 
                        and aspiring astronauts, all driven by a common goal: to contribute to the future of space exploration. 
                        Through collaborative efforts, hands-on projects, and interdisciplinary teamwork, we strive to design, build, 
                        and test autonomous 3D-printed habitats that can be constructed in Mars-like environments here on Earth.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
                        <div className="flex flex-col items-center">
                            <Image 
                                src={renderedrover}
                                alt="Rendered Rover"
                                className="rounded-lg shadow-lg w-full h-auto"
                                priority
                            />
                            <p className="mt-4 text-lg text-center text-stone-950">Manual Exploration Demonstrator (MED) Finished Product</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image 
                                src={roverparts}
                                alt="Rover Parts"
                                className="rounded-lg shadow-lg w-full h-auto"
                                priority
                            />
                            <p className="mt-4 text-lg text-center text-stone-950">Manual Exploration Demonstrator (MED) Exploded View </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image 
                                src={roverwalk}
                                alt="Roverwalk"
                                className="rounded-lg shadow-lg w-full h-auto"
                                priority
                            />
                            <p className="mt-4 text-lg text-center text-stone-950">Our Rover Testing in an Obstacle Course</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image 
                                src={habitatmold}
                                alt="Habitat Mold"
                                className="rounded-lg shadow-lg w-full h-auto"
                                priority
                            />
                            <p className="mt-4 text-lg text-center text-stone-950">The Mold of Our Projected Mars Habitat</p>
                        </div>
                    </div>
                </div>


                <div id="team">
                    <p className="pt-10 font-bold text-4xl text-stone-950 text-center">Team:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10 px-10">
                        <div className="flex flex-col items-center">
                            <a href="https://www.ssl.berkeley.edu/full-directory/name/robert-lillis/" target="_blank" rel="noopener noreferrer"></a>
                                <Image 
                                    src={roblillis} 
                                    alt="Dr. Rob Lillis" 
                                    className="rounded-full shadow-lg w-48 h-48 object-cover" 
                                    priority
                                />
                            <p className="mt-4 text-lg font-semibold text-stone-950 mb-1">Dr. Rob Lillis</p>
                            <p className="text-md text-slate-600">Advisor</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/skylerchan03/" target="_blank" rel="noreferrer"></a>
                                <Image 
                                    src={skyler} 
                                    alt="Skyler Chan" 
                                    className="rounded-full shadow-lg w-48 h-48 object-cover" 
                                    priority
                                />
                            <p className="mt-4 text-lg font-semibold text-stone-950 mb-1">Skyler Chan</p>
                            <p className="text-md text-slate-600">President & Software Lead</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/s3bast1anc/" target="_blank" rel="noreferrer"></a>
                                <Image 
                                    src={sebastian} 
                                    alt="Sebastian Castaneda" 
                                    className="rounded-full shadow-lg w-48 h-48 object-cover" 
                                    priority
                                />
                            <p className="mt-4 text-lg font-semibold text-stone-950 mb-1">Sebastian Castaneda</p>
                            <p className="text-md text-slate-600">Chief Engineer</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/alexander-kasolas-39252b259/" target="_blank" rel="noreferrer"></a>
                                <Image 
                                    src={alex} 
                                    alt="Alexander Kasolas" 
                                    className="rounded-full shadow-lg w-48 h-48 object-cover" 
                                    priority
                                />
                            <p className="mt-4 text-lg font-semibold text-stone-950 mb-1">Alexander Kasolas</p>
                            <p className="text-md text-slate-600">External VP & Treasurer</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/shimaila-mansoor/" target="_blank" rel="noopener noreferrer"></a>
                                <Image 
                                    src={shimaila} 
                                    alt="Shimaila Mansoor" 
                                    className="rounded-full shadow-lg w-48 h-48 object-cover" 
                                    priority
                                    
                                />
                            <p className="mt-4 text-lg font-semibold text-stone-950 mb-1">Shimaila Mansoor</p>
                            <p className="text-md text-slate-600">Internal VP & Electrical Lead</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <a href="https://www.linkedin.com/in/peterayala9/" target="_blank" rel="noreferrer"></a>
                                <Image 
                                    src={peter} 
                                    alt="Peter Nuñez-Ayala" 
                                    className="rounded-full shadow-lg w-48 h-48 object-cover" 
                                    priority
                                />
                            <p className="mt-4 text-lg font-semibold text-stone-950 mb-1">Peter Nuñez-Ayala</p>
                            <p className="text-md text-slate-600">Mechanical Lead</p>
                        </div>
                    </div>
                </div>
                <div id="join-us" className="w-full flex flex-col justify-center items-center mt-10">
                    <p className="font-bold text-4xl text-stone-950 text-center mb-2">Get Involved!</p>
                    <div className="flex flex-col items-center space-y-4">
                        <a href="mailto:mhabberkeley@gmail.com" className="flex items-center space-x-2 text-black pt-2">
                            <EmailIcon fontSize="large" sx={{ color: 'black' }} />
                            <span className="text-lg text-black">mhabberkeley@gmail.com</span>
                        </a>
                        <a href="https://instagram.com/mars.berkeley" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mb-8 text-black">
                            <InstagramIcon fontSize="large" sx={{ color: 'black' }} />
                            <span className="text-lg text-black">mars.berkeley</span>
                        </a>
                        <div className="h-16"><p className="text-center items-center justify-center">Made with ❤️ by the Mars Habitat at Berkeley Team</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
