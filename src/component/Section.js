import React from 'react'
import resim4 from '../img/rohit-tandon-9wg5jCEPBsw-unsplash.jpg';
import resim5 from '../img/search.png'
import resim6 from '../img/visual-1.png'

const Section = () => {
  return (
    <div>
         <div className="mainpic">
            <div className="img_main">

                <img src={resim4} alt="" width="100%" height="594px"/>

            </div>
            <div className="text-block">
                <span className="baş">Unsplash</span>
                <h1 className="başlık">The internet’s source of <a href="https://unsplash.com/license">freely-usable</a> images.</h1>
                <h1 className="sentence">Powered by creators everywhere.</h1>
                

            </div>

            <div className="search_box">
                <form className="form_2" >
                    <button className="button_1"   title="Search Unsplash" > <a href="https://unsplash.com" >
                        <img src={resim5} alt="büyütec" width="15" height="15"/></a>
                    </button>

                    <input className="input_2" type="search" title="Search Unsplash" autocapitalize="none" placeholder="Search free high-resolution Photos"  />
                    
                    <button className="button_2"> <a href="https://unsplash.com">
                        <img src={resim6}alt="visual_ikon" title="Visual Search" width="20" height="20"/></a>
                    </button>
                    
                </form>

            </div>
            
            <div className="last">
                
                <ul className="last1">
                    <li className="item3"> <span>Trending:</span></li>
                    <li className="item3"><a href="https://unsplash.com/images/nature/flower"><span> flower,</span> </a></li>
                    <li className="item3"><a href=""> <span> wallpapers,</span> </a></li>
                    <li className="item3"><a href=""><span> backgrounds,</span> </a></li>
                    <li className="item3"><a href=""> <span> happy</span> </a></li>
                </ul>
            </div>
        </div>

    </div>
    
 
  )
}

export default Section;