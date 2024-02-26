import React from 'react'

export default function ContentWithImg({content, modeTool}) {
  return (
    <section className={`${modeTool.darkMode? "text-slate-100 bg-slate-950": "text-gray-600 "} body-font h-[75vh] py-10`} id="about-section">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">{content.headingTop}
              <br className="hidden lg:inline-block"/> {content.headingBottom}
            </h1>
            <p className="mb-8 leading-relaxed">{content.description}</p>
            <div className="flex justify-center">
              <a href="./product.html"><button className={`${modeTool.darkMode?"bg-emerald-800 hover:bg-emerald-950": "bg-green-500 hover:bg-green-600"} flex mx-auto mt-6 text-white  border-0 py-2 px-5 focus:outline-none  rounded`}>View new designs</button></a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded w-full h-full" alt="hero" src="./images/pashmina.jpg"/>
          </div>
        </div>
    </section>
  )
}
