import './Education.css';
import { useState } from 'react';
import { courses } from './EducationData';
import EducationCars from './EducationCard';

function Education() {
  const [coursesList, setCoursesList] = useState(courses)
  return (
    <>
      <div className='p-5'>
        <h2 className='txt-shadow text-start fs-1 mb-4'>Portfolio</h2>
        <div className="row justify-content-evenly g-5 ">
          {coursesList.map((course, index) => {
            return(
              <div className="col-md-3 col-12 mx-5" key={course.id}>
                <EducationCars EducationData={course} handleBGColor={(index+1) % 2 == 0 ? "#918c83" : "#363636"} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Education