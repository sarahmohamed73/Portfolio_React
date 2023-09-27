import './Skills.css'

function Skills() {
  return (
    <>
      <div className='row row-cols-1 bg-dark text-light p-5 justify-content-center'>
        <div  className='heading w-75 mb-5'>
          <h2 className='text-center mb-4 fs-1'>Skills</h2>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='row align-items-center w-75 mb-5'>
          <div className='col skills'>
            <h4 className='focus position-relative mb-4'>My Focus</h4>
            <ul  className="list-group list-group-flush">
              <li  className="list-group-item">UI UX Design</li>
              <li  className="list-group-item">Responsive Design</li>
              <li  className="list-group-item">Web Design</li>
              <li  className="list-group-item">Python Develop</li>
              <li  className="list-group-item">Mobile App Design</li>
            </ul>
          </div>

          <div className='col prog'>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark" style={{width: '95%'}}>HTML</div>
            </div>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark"  style={{width: '95%'}}>CSS</div>
            </div>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark"  style={{width: '80%'}}>JavaScript</div>
            </div>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark"  style={{width: '80%'}}>React</div>
            </div>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark"  style={{width: '90%'}}>Photoshop</div>
            </div>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark"  style={{width: '85%'}}>Adobe XD</div>
            </div>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark"  style={{width: '70%'}}>Node JS</div>
            </div>
            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar fs-5 text-dark"  style={{width: '50%'}}>WordPress</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills