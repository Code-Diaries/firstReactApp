import React, { useState } from 'react'
const NavBar = () => {

    const [openingButton, setopeningButton] = useState(false);

    function EnterSection  () {
      return (
        <div>
          <nav class="navbar bg-light">
            <div class="container">
              <ul>
                <li>sect1</li>
                <li>sect2</li>
                <li>sect3</li>
              </ul>
            </div>
          </nav>
        </div>
      );
    };
  
    function activeButton  () {
      setopeningButton(!openingButton);
    };

    
  
        function onClickFirst() {
            console.log("helllllll");
        }    

        return (
                <nav class=" navbar">
                    <a class="icon" href="https://unsplash.com/" title="Unsplash Home">
                        <svg width="32" height="32" >
                            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"><title id="unsplash-home">Unsplash Home</title></path>
                        </svg>
                    </a>
                    <div class="buttonpart">
                        <button class="buttonone" type="submit" placeholder="Search free high-resolution photos"> 
                            <svg class="svgone" width="25" height="25" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
                                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
                            </svg> 
                            <input class="input-txt" type="search" title="search unsplash" placeholder="Search free high-resolition photos"></input>
                            <svg class="svgtwo" width="32" height="32"  viewBox="0 0 32 32" version="1.1" aria-hidden="false" >
                                <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul>
                        <li><a href="https://unsplash.com/explore">Explore</a></li>
                        <li><a href="https://unsplash.com/advertise">Advertise</a></li>
                        <li><a href="https://unsplash.com/blog/">Blog</a> </li>
                    </ul>
                    <div class="stick"></div>
                    <div class="log-sing">
                        <a href="https://unsplash.com/login">Log in</a>
                        /
                        <a href="https://unsplash.com/join">Sing up</a> 
                    </div>
                    
                    <a href="https://unsplash.com/?modal=%7B%22tag%22%3A%22Login%22%2C%22value%22%3A%7B%22tag%22%3A%22SubmitAPhoto%22%2C%22value%22%3A%7B%7D%7D%7D">
                        <button class="submit-two" type="button">submit a photo</button>
                    </a>
                    
                    <svg class="svgthree" width="24" height="28" onClick={activeButton  }>
                        <path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path>
                    </svg>


                    {openingButton ? (<div><EnterSection /> </div>) 
                            : (<div></div>)
                            }
                    
                
                </nav>
                )
}
export default NavBar