export default function SkillsProgress ({ skillData }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-4 progress fs-6 d-flex justify-content-center align-items-center " style={{backgroundColor: "#918c83"}}>
          <p className="m-0">{skillData.skillName}</p>
        </div>
        <div className="col progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" key={skillData.id}>
          <div className="progress-bar fs-5 text-dark" style={{width: `${skillData.progress}%`}}></div>
        </div>
      </div>
    </>
  )
}