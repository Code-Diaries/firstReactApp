import React from 'react'
import cover from "../images/cover.avif"
import starIcon from "../images/star.png"
import searchIcon from "../images/icons8-search-30.png"
import visualIcon from "../images/icons8-client-management-48.png"

const Cover = () => {
    return (
        <div className="cover">
            <div className="img">
                <img className="coverground" src={cover} alt="cover" />
            </div>
            <div className="textblock">
                <span className="heading" style={{ color: "white" }}>Unsplash</span>
                <h1 className="heading2" style={{ color: "white" }}>The internet’s source of <a className="heading4" href="https://unsplash.com/license">freely-usable images</a></h1>
                <span className="heading3">Powered by creators everywhere.</span>
                <div>
                    <form className="searchbox2">
                        <button className="button"><a href="https://unsplash.com/"><img src={searchIcon} alt="search" width="25" height="24" /></a></button>
                        <input className="search" type="search" name="search" placeholder="Search free high-resolution photos" />
                        <button className="visual_button"><a href="https://unsplash.com/"><img src={visualIcon} alt="visual" width="40" height="34" /></a></button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Cover