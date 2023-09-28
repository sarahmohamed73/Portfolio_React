import './Skills.css';
import { useState } from 'react';
import { skills } from './SkillsData';
import SkillsProgress from './SkillsProgress';

function Skills() {
  const [skillsList, setSkillsList] = useState(skills)
  return (
    <>
      <div className='row row-cols-1 text-light p-md-5 px-1 py-5 justify-content-center' style={{backgroundColor: "#363636"}}>
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
        <div className='row align-items-center w-75'>
          <div className='col-md-6 col-12 mb-5 skills'>
            <h4 className='focus position-relative mb-4'>My Focus</h4>
            <ul  className="list-group list-group-flush">
              <li  className="list-group-item">UI UX Design</li>
              <li  className="list-group-item">Responsive Design</li>
              <li  className="list-group-item">Web Design</li>
              <li  className="list-group-item">Python Develop</li>
              <li  className="list-group-item">Mobile App Design</li>
            </ul>
          </div>
          <div className='col-md-6 col-12 prog'>
            {skillsList.map((skill) => {
              return (
                <SkillsProgress skillData={skill}/>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills