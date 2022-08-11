import React from 'react' 
import resim1 from '../img/download.png'
import resim2 from '../img/search.png'
import resim3 from '../img/visual-1.png'
import resim4 from '../img/download  -menu.png'
import { useState } from 'react';









const Header = () => {

    const[moreLinks,setMoreLinks]=useState(false)
  
    function ChangeMoreLinks(){
    setMoreLinks(!moreLinks)
   }
   
   
    const MoreLinks = () => {
        return(
        <div>
            <ul>
               <li>First</li>
               <li>Second</li>
               <li>Third</li>
            </ul>

        </div>
        ) 
        }
    
    

  return (
    <div>
         <header className="header"/>
        
            <nav className="navbar">
        
                <div className="home">
                <a href="https://unsplash.com">
                    <img src={resim1} alt="unsplash-home" title="Home" href="index.html" width="26" height="26"/>
                </a>

                </div>

                 <div className="space"></div>


                <div className="search_button">
                <form className="form_1" >
                    <button className="button_1"   title="Search Unsplash" > <a href="https://unsplash.com" >
                        <img src={resim2} alt="büyütec" width="15" height="15"/></a>
                    </button>

                    <input className="input_1" type="search" title="Search Unsplash" autocapitalize="none" placeholder="Search free high-resolution Photos"  />
                    
                    <button className="button_2"> <a href="https://unsplash.com">
                        <img src={resim3} alt="visual_ikon" title="Visual Search" width="20" height="20"/></a>
                    </button>
                    
                </form>
                 </div>
                <div>
                <ul className="list">
                    <li> <a className="list_item" href="https://unsplash.com/explore">Explore</a> </li>
                    <li> <a className="list_item" href="https://unsplash.com/advertise">Advertise</a></li>
                    <li> <a className="list_item" href="https://unsplash.com/blog">Blog</a></li>
                </ul>

                </div>
           
                <div className="line"></div>
                <div className="space2"></div>
             
                <div className="log-sign">
                <a className="log"  href="https://unsplash.com/login">Log in</a>
                <span>/</span>
                <a className="log" href="https://unsplash.com/join">Sign up</a>

                </div>

                <div className="space3" ></div>
                <div>
                <button className="submit">
                    <a className="submit_1"   type="button" href="">Submit a Photo</a>
                </button> 

                </div>
                <div className="space4" ></div>


                <div className="menu" >
                <button className="menu1" onClick={ChangeMoreLinks}>
                     <img src={resim4} alt="menu" width="20" height="20"/>
                </button>
                {(moreLinks)? ( <div><MoreLinks/></div>)
                    : (<div></div>)
                    }


                </div>

            </nav>
    </div>
  )
}

export default Header