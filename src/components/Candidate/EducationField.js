import React, { useState } from 'react';

const EducationField = ({ diploma, institut, years, details, onRemove }) => {
  const [diplomaState, setDiplomaState] = useState(diploma);
  const [institutState, setInstitutState] = useState(institut);
  const [yearsState, setYearsState] = useState(years);
  const [detailsState, setDetailsState] = useState(details);

  const handleRemove = () => {
    onRemove();
  };

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Diplôme</label>
          <input className='form-control' type="text" name='diploma' value={diplomaState} onChange={(e) => setDiplomaState(e.target.value)} />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Institut</label>
          <input className='form-control' type="text" name='institut' value={institutState} onChange={(e) => setInstitutState(e.target.value)} />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Année</label>
          <input className='form-control' type="text" name='years' value={yearsState} onChange={(e) => setYearsState(e.target.value)} />
        </div>
      </div>
      <div className='col-lg-6'>
        <div className='mb-3'>
          <label className='form-label'>Details</label>
          <input className='form-control' type="text" name='details' value={detailsState} onChange={(e) => setDetailsState(e.target.value)} />
        </div>
      </div>

      <div className='text-center'>
        <span className="btn border" onClick={handleRemove}>Supprimer</span>
      </div>
    </div>
  );
};

export default EducationField;
