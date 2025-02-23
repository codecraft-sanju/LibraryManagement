import React from 'react';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import sir from '../assets/sir.jpg';

const Footer = ({ homeRef, aboutRef, cardRef, rulesRef, servicesRef, contactRef }) => {
    const scrollToSection = (ref) => {
        const offset = 100;
        const elementPosition = ref.current.getBoundingClientRect().top;
        console.log(window.scrollY)
        const offsetPosition = elementPosition + window.scrollY - offset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };
    return (
        <footer className="py-8 mt-10 text-white bg-gray-900">
            <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
                <div className="flex items-center mb-6 md:mb-0">
                    <img
                        src={sir}
                        alt="Profile"
                        className="w-16 h-16 mr-4 border-2 border-white rounded-full shadow-lg"
                    />
                    <div>
                        <p className="text-lg font-semibold">Nirmal Vaishnav</p>
                        <a href="van.featherstone@medusind.com" className="text-sm">van.featherstone@medusind.com</a>
                        <div className="flex items-center mt-1">
                            <FaInstagram className="mr-2 text-xl" />
                            <a
                                href="https://www.instagram.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:underline"
                            >
                                Instagram
                            </a>
                        </div>
                        <div className="flex items-center mt-2">
                            <FaMapMarkerAlt className="mr-2 text-xl" />
                            <a href='https://www.google.com/maps/place/973X%2BCMX+Vaishnav+library,+Kenpura+Rd,+Kellawara,+Rani+Gaon,+Rajasthan+306115/data=!4m2!3m1!1s0x39428500568987af:0xe9438340530bd0c8?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE1Mi4xMDAYACDXggMqUSw5NDI0MjUxNyw5NDIxMjQ5Niw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D' className="text-sm">Vaishnav Library</a>
                        </div>
                    </div>
                </div>

                <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
                    <li className="transition duration-300 cursor-pointer hover:text-gray-400" onClick={() => scrollToSection(homeRef)}>
                        Home
                    </li>
                    <li className="transition duration-300 cursor-pointer hover:text-gray-400" onClick={() => scrollToSection(aboutRef)}>
                        About
                    </li>
                    <li className="transition duration-300 cursor-pointer hover:text-gray-400" onClick={() => scrollToSection(servicesRef)}>
                        Services
                    </li>
                    <li className="transition duration-300 cursor-pointer hover:text-gray-400" onClick={() => scrollToSection(cardRef)}>
                        Facilities
                    </li>
                    <li className="transition duration-300 cursor-pointer hover:text-gray-400" onClick={() => scrollToSection(rulesRef)}>
                        Rules
                    </li>
                    <li className="transition duration-300 cursor-pointer hover:text-gray-400" onClick={() => scrollToSection(contactRef)}>
                        Contact
                    </li>
                   
                </ul>
            </div>
            <div className="mt-6 text-center">
                <p className="text-sm">Created by sanjay © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
