import React from 'react'

const Section = () => {
  return (
    <div className="bigpart">
    <div className="textpart">
      <div className="firstspan">
        <span>Unsplash</span>
      </div>
      <div className="firsth">
        <h1 className="başlık">
          The internet’s source of{" "}
          <a href="https://unsplash.com/license">freely-usable</a> images.
        </h1>
        <h1>Powered by creators everywhere.</h1>
      </div>
      <button className="bigsearch" type="submit">
        Search photos
      </button>
      <h2>
        Trending:
        <a href="https://unsplash.com/images/nature/flower">flower,</a>
        <a href="https://unsplash.com/wallpapers">wallpapers,</a>
        <a href="https://unsplash.com/backgrounds">backgrounds,</a>
        <a href="https://unsplash.com/images/feelings/happy">happy,</a>
        <a href="https://unsplash.com/images/feelings/love">love</a>
      </h2>
    </div>
  </div>
  )
}

export default Section