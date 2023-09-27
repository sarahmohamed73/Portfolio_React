import './Bio.css'
import resume from '../../assets/Files/Resume.pdf'
function Bio() {
  return (
    <>
      <div className="row align-items-center my-5">
        <div className="col-3 g-2">
          <h2 className="txt-shadow text-center fs-1">ABOUT ME</h2>
        </div>
        <div className="col-9 text-start p-2">
          <p className="lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href={resume}  className="btn btn-dark btn-lg" download="Resume">Download Resume</a>
        </div>
      </div>
    </>
  )
}

export default Bio