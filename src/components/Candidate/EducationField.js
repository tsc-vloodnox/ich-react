import React, { useState } from 'react';

const EducationField = ({ diploma, institut, years, details, onRemove, onEducationUpdate }) => {
  const [diplomaState, setDiplomaState] = useState(diploma);
  const [institutState, setInstitutState] = useState(institut);
  const [yearsState, setYearsState] = useState(years);
  const [detailsState, setDetailsState] = useState(details);

  const handleDiplomaChange = (e) => {
    const value = e.target.value;
    setDiplomaState(value);
    onEducationUpdate('diploma', value);
  };
  const handleInstitutChange = (e) => {
    const value = e.target.value;
    setInstitutState(value);
    onEducationUpdate('institut', value);
  };
  const handleYearsChange = (e) => {
    const value = e.target.value;
    setYearsState(value);
    onEducationUpdate('years', value);
  };
  const handleDetailsChange = (e) => {
    const value = e.target.value;
    setDetailsState(value);
    onEducationUpdate('details', value);
  };

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Diplôme</label>
          <input className='form-control' type="text" name='diploma' value={diplomaState} onChange={handleDiplomaChange} />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Institut</label>
          <input className='form-control' type="text" name='institut' value={institutState} onChange={handleInstitutChange} />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Année</label>
          <input className='form-control' type="text" name='years' value={yearsState} onChange={handleYearsChange} />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Details</label>
          <input className='form-control' type="text" name='details' value={detailsState} onChange={handleDetailsChange} />
        </div>
      </div>

      <div className='text-center'>
        <span className="btn border" onClick={handleRemove}>Supprimer</span>
      </div>
    </div>
  );
};

export default EducationField;
