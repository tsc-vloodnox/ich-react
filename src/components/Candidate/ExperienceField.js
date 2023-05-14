import React, { useState } from 'react';

const ExperienceField = ({ onRemove, jobTitle, companyName, years, details }) => {

  const [jobTitleState, setJobTitleState] = useState(jobTitle);
  const [companyNameState, setCompanyNameState] = useState(companyName);
  const [yearsState, setYearsState] = useState(years);
  const [detailsState, setDetailsState] = useState(details);

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Titre</label>
          <input className='form-control' name='jobTitle' type="text" value={jobTitleState} onChange={(e) => setJobTitleState(e.target.value)} />
        </div>
      </div>

      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Nom de la compagny</label>
          <input className='form-control' name='companyName' type="text" value={companyNameState} onChange={(e) => setCompanyNameState(e.target.value)} />
        </div>
      </div>

      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Année</label>
          <input className='form-control' name='years' type="text" value={yearsState} onChange={(e) => setYearsState(e.target.value)} />
        </div>
      </div>

      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Details</label>
          <input className='form-control' name='details' type="text" value={detailsState} onChange={(e) => setDetailsState(e.target.value)} />
        </div>
      </div>

      <div className='text-center'>
        <span className="btn border" onClick={handleRemove}>Supprimer</span>
      </div>
    </div>
  )
}

export default ExperienceField