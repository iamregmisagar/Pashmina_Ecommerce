import React from 'react'

export default function ContactForm({content, modeTool}) {
  return (
    <section className={`${modeTool.darkMode? "bg-slate-950 text-slate-100":"text-gray-900"} text-gray-600 body-font relative h-[60vh] px-5 py-10`} id="contact-section">
        <div className="container  mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm ">{content.firstInput}</label>
                  <input type="text" id="name" name="name" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm ">{content.secondInput}</label>
                  <input type="email" id="email" name="email" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm ">{content.thirdInput}</label>
                  <textarea id="message" name="message" className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className={`${modeTool.darkMode?"bg-emerald-800 hover:bg-emerald-950": "bg-green-500 hover:bg-green-600"} flex mx-auto mt-6 text-white  border-0 py-2 px-7 focus:outline-none  rounded`}>Send</button>
              </div>
          </div>
          </div>
        </div>
    </section>
  )
}
