import React from 'react'
import Header from '../Components/Header'
import Category from '../Components/Category'
import Heading from '../Components/Heading'
import Gallery from '../Components/Gallery'
import Footer from '../Components/Footer'



export default function Home({mode}) {
  
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
          heading: 'Explore our categories',
          description:
            '',
            
        }}
        />
      
      
    <Category
      modeTool={{
        darkMode:mode.darkMode,
        toogle:mode.changeMode
      }}
        
        firstElement={{ title: 'Shawls for men', description: 'New and awesome designs of shawls for men in cold.', image:"./images/pashmina-men.webp", btn: 'View designs' }}
        secondElement={{ title: 'Shawls for Women', description: 'New and awesome designs of shawls for women in cold.', image:"./images/pashmina-women.jpg", btn: 'View designs' }}
      />
    <Heading
    modeTool={{
      darkMode:mode.darkMode,
      toogle:mode.changeMode
    }}
        content={{
          heading: 'Finland is cold ? Not with Pashmina.',
          description:
            'We build 100% pashmina fiber clothes with innovative design. Enjoy the warmness with our pashmina clothes.',
        }}
      />
      <Gallery 
      modeTool={{
        darkMode:mode.darkMode,
        toogle:mode.changeMode
      }}
      images={{imgOne:"./images/gallary-1.jpg",imgTwo:"./images/gallery-2.jpg",imgThree:"./images/gallery-3.webp",imgFour:"./images/gallery-4.webp",imgFive:"./images/gallery-5.webp",imgSix:"./images/gallery-6.webp"}}
      />
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
