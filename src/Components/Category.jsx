import React from 'react'

export default function Category({firstElement, secondElement, modeTool}) {
  return (
    <section className={`${modeTool.darkMode? "text-slate-100 bg-slate-950": "text-gray-600 "} body-font h-[60vh]`}>
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full object-cover" src={firstElement.image}/>
          </div>
          <h2 className="title-font text-2xl font-medium  mt-6 mb-3">{firstElement.title}</h2>
          <p className="leading-relaxed text-base">{firstElement.description}</p>
          <a href="./product.html"><button className={`${modeTool.darkMode?"bg-emerald-800 hover:bg-emerald-950": "bg-green-500 hover:bg-green-600"} flex mx-auto mt-6 text-white  border-0 py-2 px-5 focus:outline-none  rounded`}>{firstElement.btn}</button></a>
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={secondElement.image}/>
          </div>
          <h2 className="title-font text-2xl font-medium  mt-6 mb-3">{secondElement.title}</h2>
          <p className="leading-relaxed text-base">{secondElement.description}</p>
          <a href="./product.html"><button className={`${modeTool.darkMode?"bg-emerald-800 hover:bg-emerald-950": "bg-green-500 hover:bg-green-600"} flex mx-auto mt-6 text-white  border-0 py-2 px-5 focus:outline-none  rounded`}>{secondElement.btn}</button></a>
        </div>
      </div>
    </div>
</section>
    
  )
}
