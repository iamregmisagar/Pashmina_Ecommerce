import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Heading from '../Components/Heading'
import ContactForm from '../Components/ContactForm'

export default function Contact({mode}) {
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
       <Heading
       modeTool={{
        darkMode:mode.darkMode,
        toogle:mode.changeMode
      }}
        content={{
          heading: 'Contact Us',
          description:
            'Send you queries!! We are always ready and happy to answer your queries!',
          marginBottom:0
        }}
      />
      <ContactForm 
       modeTool={{
        darkMode:mode.darkMode,
        toogle:mode.changeMode
      }}
      
      content={{
          firstInput:'Name',
          secondInput:'Email',
          thirdInput:'Message'
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
