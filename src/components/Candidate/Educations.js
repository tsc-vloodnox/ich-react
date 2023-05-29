import React from 'react';
import { v4 as uuidv4 } from "uuid";
import {
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from '../../firebaseConfig';
import { toast } from 'react-toastify';

const Educations = ({ id }) => {
  const candidateRef = doc(db, "Candidats", id);

  const handleChangeEdu = (e) => {
    e.preventDefault();

    const diploma = e.target.diploma.value;
    const institut = e.target.institut.value;
    const years = e.target.years.value;
    const details = e.target.details.value;

    updateDoc(candidateRef, {
      educations: arrayUnion({
        diploma,
        institut,
        years,
        details,
        eduId: uuidv4(),
      }),
    }).then(toast("success"))
  };

  return (
    <form onSubmit={handleChangeEdu}>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Diplôme</label>
            <input className='form-control' type="text" name='diploma' />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Institut</label>
            <input className='form-control' type="text" name='institut' />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Année</label>
            <input className='form-control' type="text" name='years' />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Details</label>
            <input className='form-control' type="text" name='details' />
          </div>
        </div>
      </div>
      <div className='text-center'>
        <button className='btn border' type='submit'>Envoyer</button>
      </div>
    </form>
  );
};

export default Educations;
