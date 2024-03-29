import React from 'react'

export default function Gallery({images, modeTool}) {
  return (
    <div  className={`${modeTool.darkMode? "text-slate-100 bg-slate-950": "text-gray-600 "} flex flex-wrap md:-m-2 -m-1 mt-20 pt-10`}>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={images.imgOne}/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={images.imgTwo}/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={images.imgThree}/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={images.imgFour}/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={images.imgFive}/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={images.imgSix}/>
              </div>
            </div>
          </div>
  )
}
