import React from 'react';
import { ReactTyped } from "react-typed";
import book from '../assets/book.png';
import book2 from '../assets/gifbook.gif';

const Home = ({contactRef}) => {
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
    <div className="relative flex flex-col items-center justify-between w-full h-full p-6 px-40 mt-32 font-bold md:flex-row">
      <div className="z-10 space-y-4 text-center text-white md:text-left md:w-1/2">
        <h2 className="text-[#08D665] text-xl md:text-2xl">HELLO!</h2>
        <h1 className={`text-3xl md:text-4xl font-bold uppercase text-white}`}>
          <ReactTyped strings={["Track books, members, and issues seamlessly","Digitalize your library management","Efficient library solutions at your fingertips"]} typeSpeed={50} loop backSpeed={30} />
        </h1>
        
        <p className={`text-sm md:text-base max-w-lg mx-auto md:mx-0 text-white `}>
        A library management system designed to simplify the process of managing books, members, and book lending. Keep track of all your inventory, monitor book availability, manage members, and easily record issued and returned books.
        </p>
        
        <button ref={contactRef} onClick={()=>scrollToSection(contactRef)} className="text-white bg-[#08D665] p-3 rounded-md mt-4">Contact Me</button>
      </div>
      
      <div className="z-10 flex justify-center mt-8 md:mt-0">
        <img 
          src={book2} 
          alt="Sky illustration" 
          className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl" 
        />
      </div>
    </div>
  );
};

export default Home;
