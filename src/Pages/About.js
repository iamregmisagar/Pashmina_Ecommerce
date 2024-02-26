import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContentWithImg from '../Components/ContentWithImg'

export default function About({mode}) {
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

      <ContentWithImg 
      modeTool={{
        darkMode:mode.darkMode,
        toogle:mode.changeMode
      }}

      content={{
          headingTop: 'Welcome to our exquisite world ',
          headingBottom: 'of Pashmina elegance',
          description:'Elevate your style with the unmatched luxury of Pashmina shawls. Boasting a rare and exquisite fiber, these shawls offer unparalleled softness, lightweight warmth, and timeless elegance. Versatile enough for any occasion, Pashmina shawls effortlessly combine sophistication with comfort. Choose sustainable luxury that not only enhances your wardrobe but also reflects a commitment to ethical craftsmanship. Embrace the allure of Pashmina and experience the advantage of a fashion accessory that transcends trends, making a statement of refined taste and enduring style.',
          img:""
        }}/>

<Footer 
modeTool={{
  darkMode:mode.darkMode,
  toogle:mode.changeMode
}}

content={{
  
        title:"Pashmina",
        year:"© 2023 Pashmina —",
        email:"regmi.sagar@outlook.com"
      }}/>
      
    </>
  )
}