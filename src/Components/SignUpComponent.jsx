import React from 'react'

export default function SignUpComponent({modeTool}) {
  return (
    <div className={`${modeTool.darkMode? "bg-slate-950 text-slate-100":"text-gray-900 "} h-[75vh] py-10`}>
    <div className= "body-font relative grid justify-center ">
        <h2 className="text-lg font-medium title-font mb-5">Sign Up</h2>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm ">Full Name</label>
          <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm ">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm ">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        <button className={`${modeTool.darkMode?"bg-emerald-800 hover:bg-emerald-950": "bg-green-500 hover:bg-green-600"} mt-6 text-white  border-0 py-2 px-8 text-lg focus:outline-none  rounded`}>Sign Up</button>
        <p className="text-xs mt-3">Sign up today and enjoy our products. You won't regret it! </p>
      </div>  
      </div> 
  )
}
