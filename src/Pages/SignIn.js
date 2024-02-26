import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SignInComponent from '../Components/SignInComponent'

export default function SignIn({mode}) {
  return (
    <>
    <Header
    modeTool={{
      darkMode:mode.darkMode,
      toogle:mode.changeMode
    }}
        content={{
          title: 'Pashmina',
          firstCategory: 'About',
          secondCategory: 'SignUp',
          thirdCategory: 'SignIn',
          lastCategory: 'Contact Us',
         
        }}
      />
      <SignInComponent modeTool={{
      darkMode:mode.darkMode,
      toogle:mode.changeMode
    }}/>

<Footer 
modeTool={{
  darkMode:mode.darkMode,
  toogle:mode.changeMode
}}content={{
        title:"Pashmina",
        year:"© 2023 Pashmina —",
        email:"regmi.sagar@outlook.com"
      }}/>
      
    </>
  )
}