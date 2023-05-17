import React, { useState } from 'react';

const ExperienceField = ({ jobTitle, companyName, years, details, onRemove, onExperienceUpdate }) => {

  const [jobTitleState, setJobTitleState] = useState(jobTitle);
  const [companyNameState, setCompanyNameState] = useState(companyName);
  const [yearsState, setYearsState] = useState(years);
  const [detailsState, setDetailsState] = useState(details);

  const handleJobTitleChange = (e) => {
    const value = e.target.value;
    setJobTitleState(value);
    onExperienceUpdate('jobTitle', value);
  };
  const handleCompanyNameChange = (e) => {
    const value = e.target.value;
    setCompanyNameState(value);
    onExperienceUpdate('companyName', value);
  };
  const handleYearsChange = (e) => {
    const value = e.target.value;
    setYearsState(value);
    onExperienceUpdate('years', value);
  };
  const handleDetailsChange = (e) => {
    const value = e.target.value;
    setDetailsState(value);
    onExperienceUpdate('details', value);
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Titre</label>
          <input className='form-control' name='jobTitle' type="text" value={jobTitleState} onChange={handleJobTitleChange} />
        </div>
      </div>

      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Nom de la compagny</label>
          <input className='form-control' name='companyName' type="text" value={companyNameState} onChange={handleCompanyNameChange} />
        </div>
      </div>

      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Année</label>
          <input className='form-control' name='years' type="text" value={yearsState} onChange={handleYearsChange} />
        </div>
      </div>

      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Details</label>
          <input className='form-control' name='details' type="text" value={detailsState} onChange={handleDetailsChange} />
        </div>
      </div>

      <div className='text-center'>
        <span className="btn border" onClick={handleRemove}>Supprimer</span>
      </div>
    </div>
  )
}

export default ExperienceField