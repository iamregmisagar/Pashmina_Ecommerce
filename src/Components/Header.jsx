import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Header({content, modeTool}) {
  
  return (
    <header className={`${modeTool.darkMode? "text-slate-100 bg-slate-950": "text-gray-600 "} h-[10vh] px-5 py-10 body-font`}>
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link to="/about" className={`${modeTool.darkMode? "hover:text-slate-300":"hover:text-gray-950"} mr-5`}>
            {content.firstCategory}
          </Link>
          <Link to="/signup" className={`${modeTool.darkMode? "hover:text-slate-300":"hover:text-gray-950"} mr-5`}>
          {content.secondCategory}
          </Link>
          <Link to="/signin" className={`${modeTool.darkMode? "hover:text-slate-300":"hover:text-gray-950"} mr-5`}>
          {content.thirdCategory}
          </Link>
        </nav>
        <Link
          to="/"
          className={`${modeTool.darkMode? "text-slate-100": "text-gray-900"} flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0`}
        >
          <span className="ml-3 text-2xl">{content.title}</span>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button className={`${modeTool.darkMode? "bg-slate-950 hover:bg-slate-800":"bg-gray-100 hover:bg-gray-200"} inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 `} onClick={modeTool.toogle}>
          {modeTool.darkMode?"Turn Light mode" : "Turn dark mode" }
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
        

        
          <Link to="/contact">
            <button className={`${modeTool.darkMode? "bg-slate-950 hover:bg-slate-800":"bg-gray-100 hover:bg-gray-200"} inline-flex items-center  border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 `}>
              
              {content.lastCategory}
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
