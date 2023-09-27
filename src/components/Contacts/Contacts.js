import './Contacts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Contacts() {
  return (
    <>
      <div className='container-fluid bg-dark text-light p-5'>
        <div className='row px-5 align-items-center '>
          <div className='col text-start'>
            <h4 className='text-uppercase mb-3'>Get In Touch</h4>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> sarah@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faAddressCard} /> 0101122334455
            </p>
          </div>
          <div className='col'>
            <button className="contact btn btn-outline-light text-light">CONTACT ME</button>
          </div>
          <div className='col'>
            <p>
              <FontAwesomeIcon className='me-4' icon={faLinkedin} />
              <FontAwesomeIcon className='me-4' icon={faFacebookF} />
              <FontAwesomeIcon className='me-4' icon={faTwitter} />
            </p>
            <p>Copyright 	&copy; 2023 KR</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts