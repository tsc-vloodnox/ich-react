import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { arrayUnion, doc, updateDoc, } from "firebase/firestore";
import { db } from '../../firebaseConfig';


const Experiences = ({ id }) => {
  const candidateRef = doc(db, "Candidats", id);

  const handleChangeExp = (e) => {
    e.preventDefault();

    const jobName = e.target.jobName.value;
    const companyName = e.target.companyName.value;
    const years = e.target.years.value;
    const details = e.target.details.value;

    updateDoc(candidateRef, {
      experiences: arrayUnion({
        jobName,
        companyName,
        years,
        details,
        expId: uuidv4(),
      }),
    })
  };

  return (
    <form onSubmit={handleChangeExp}>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Titre</label>
            <input className='form-control' name='jobName' type="text" />
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Nom de la compagny</label>
            <input className='form-control' name='companyName' type="text" />
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Année</label>
            <input className='form-control' name='years' type="text" />
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='mb-3'>
            <label className='form-label'>Details</label>
            <input className='form-control' name='details' type="text" />
          </div>
        </div>
      </div>
      <div className='text-center'>
        <button className='btn border' type='submit'>Envoyer</button>
      </div>
    </form>
  )
}

export default Experiences