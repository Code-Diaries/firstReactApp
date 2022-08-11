import React, { useState } from 'react'
import starIcon from "../images/star.png"
import searchIcon from "../images/icons8-search-30.png"
import visualIcon from "../images/icons8-client-management-48.png"
import menu from "../images/menu.png"

const Header = () => {
  const [isOpen, setİsOpen] = useState(false)
  const openMenu = () => {
    setİsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className="headerDiv">
      <header className="header" >
        <nav className="navbar">
          <div className="home">
            <a href="https://unsplash.com/">
              <img src={starIcon} alt="home-button" className="home_button" />
            </a>
          </div>
          <div className="space"></div>
          <div>
            <form className="searchbox">
              <button className="button"><a href="https://unsplash.com/"><img src={searchIcon} alt="search" width="25" height="24" /></a></button>
              <input className="search" type="search" name="search" placeholder="Search free high-resolution photos" />
              <button className="visual_button"><a href="https://unsplash.com/"><img src={visualIcon} alt="visual" width="40" height="34" /></a></button>
            </form>
          </div>
          <div>
            <ul className="eab">
              <li><a className="list_item" href="https://unsplash.com/explore">Explore</a></li>
              <li><a className="list_item" href="https://unsplash.com/advertise">Advertise</a></li>
              <li><a className="list_item" href="https://unsplash.com/blog/">Blog</a></li>
            </ul>
          </div>
          <div className="line"></div>
          <div className="space4"></div>
          <div className="log_sign">
            <a className="log" href="https://unsplash.com/login">Log in</a>
            <span>/</span>
            <a className="log" href="https://unsplash.com/join">Sign up</a>
          </div>
          <div className="space5"></div>
          <div>
            <button className="photo">
              <a className="submit" type="button" href="https://unsplash.com/?modal=%7B%22tag%22%3A%22Login%22%2C%22value%22%3A%7B%22tag%22%3A%22SubmitAPhoto%22%2C%22value%22%3A%7B%7D%7D%7D">Submit a photo</a>
            </button>
          </div>
          <div className="space6"></div>
          <div className="menu">
            <button>
              <a href="unsplash.com"><img onClick={openMenu} src={menu} alt="menu" width="15" height="10" /></a>
            </button>
            {
              isOpen ?
                (<div>
                  <nav class="navbar bg-light">
                    <div class="container">
                      <ul>
                        <li>Erster Eintrag</li>
                        <li>Zweiter Eintrag</li>
                        <li>Dritter Eintrag</li>
                      </ul>
                    </div>
                  </nav>
                </div>)

                : (<div></div>)

            }
          </div>

        </nav>
      </header>
      <div className="secondnav">
        <div className="links" >
          <ul>
            <li className="click1"><a className="under" href="https://unsplash.com/">Editorial</a></li>
          </ul>
        </div>
        <div className="space7"></div>
        <div style={{ width: "100%" }}>
          <ul className="click2">
            <li><a href="https://unsplash.com/t/current-events">Current Events</a></li>
            <li><a href="https://unsplash.com/t/wallpapers">Wallpapers</a></li>
            <li><a href="https://unsplash.com/t/3d-renders">3D Renders</a></li>
            <li><a href="https://unsplash.com/t/textures-patterns">Textures & Patterns</a></li>
            <li><a href="https://unsplash.com/t/experimental">Experimental</a></li>
            <li><a href="https://unsplash.com/t/architecture">Architecture</a></li>
            <li><a href="https://unsplash.com/t/nature">Nature</a></li>
            <li><a href="https://unsplash.com/t/business-work">Business & Work</a></li>
            <li><a href="https://unsplash.com/t/fashion">Fashion</a></li>
            <li><a href="https://unsplash.com/t/film">Film</a></li>
            <li><a href="https://unsplash.com/t/food-drink">Food & Drink</a></li>

          </ul>
        </div>
      </div>
    </div >
  )
}

export default Header