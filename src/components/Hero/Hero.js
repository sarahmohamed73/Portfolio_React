import "./Hero.css"
import heroImage from '../../assets/images/landing.jpg'
function Hero() {
  return (
    <>
      <div className="hero card text-bg-dark">
        <img src={heroImage} className="card-img" />
        <div className="card-img-overlay bg-dark bg-opacity-50 p-5 text-center d-flex flex-column justify-content-center align-items-start">
          <h1 className="card-title mb-md-3 mb-1">Sarah Mohamed</h1>
          <p className="card-text fs-6 mb-md-3 mb-1">Full Stack Web Develpor Using Python</p>
          <button className="contact btn btn-outline-light text-light">CONTACT ME</button>
        </div>
      </div>
    </>
  )
}

export default Hero