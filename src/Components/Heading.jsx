import React from 'react'

export default function Heading({content, modeTool}) {
  console.log(modeTool)
  return (
    <div className={`${modeTool.darkMode? "bg-slate-950 text-slate-100":"text-gray-900"} h-[15vh] py-10 flex flex-col text-center w-full`}>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">{content.heading}</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{content.description}</p>
    </div>
  )
}
