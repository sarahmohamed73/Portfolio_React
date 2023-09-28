import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Contacts() {
  return (
    <>
      <div className='container-fluid text-light p-5' style={{backgroundColor: "#363636"}}>
        <div className='row px-5 align-items-center '>
          <div className='col-md-4 col-12 text-md-start text-center my-3'>
            <h4 className='text-uppercase mb-3'>Get In Touch</h4>
            <p className='m-0'>
              <FontAwesomeIcon icon={faEnvelope} /> sarah@gmail.com
            </p>
            <p className='m-0'>
              <FontAwesomeIcon icon={faAddressCard} /> 0101122334455
            </p>
          </div>
          <div className='col-md-4 col-12 my-3'>
            <button className="contact btn btn-outline-light text-light">CONTACT ME</button>
          </div>
          <div className='col-md-4 col-12 my-3'>
            <p className='m-0'>
              <FontAwesomeIcon className='me-4' icon={faLinkedin} />
              <FontAwesomeIcon className='me-4' icon={faFacebookF} />
              <FontAwesomeIcon className='me-4' icon={faTwitter} />
            </p>
            <p className='m-0'>Copyright 	&copy; 2023 KR</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts