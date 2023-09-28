export default function EducationCars({ EducationData, handleBGColor }) {
  return (
    <>
      <div className="portfolio-card card" style={{backgroundColor: `${handleBGColor}`}}>
        <div className="card-body d-flex align-items-center justify-content-center">
          <h5 className="card-title text-uppercase text-light position-relative">{EducationData.title}</h5>
        </div>
      </div>
    </>
  )
}