import React, { useState, useEffect } from "react";

const EditCandidate = () => {

  return (
    <form >
      <div>
        <h5 className="fs-17 fw-semibold mb-3 mb-0">Infos de base</h5>
        <div className="row">

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Nom et prenom</label>
              <input
                type="text"
                className="form-control"
                name='name'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Profession actuel</label>
              <input
                type="text"
                className="form-control"
                name='currentOccupation'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="date"
                className="form-control"
                name='age'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className='form-label'>Gender</label>
              <select className="form-select">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <input
                className="form-control"
                type="text"
                name='email'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Numero</label>
              <input
                className="form-control"
                type="text"
                name='number'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Langages</label>
              <input
                className="form-control"
                type="text"
                name='languages'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">offredSalary</label>
              <input
                className="form-control"
                type="text"
                name='offredSalary'
              />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mb-3">
              <label className="form-label">Présentez-vous</label>
              <textarea
                className="form-control"
                rows="5"
                name='description'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">Pic</label>
              <input
                type="file"
                className="form-control"
                name='candidatePic'
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-3">
              <label className="form-label">CV</label>
              <input
                type="file"
                className="form-control"
                name='candidateCV'
                accept='.pdf'
              />
            </div>
          </div>
        </div>

      </div>

      <div className="mt-4">
        <h5 className="fs-17 fw-semibold mb-3">Compétences </h5>
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-3">
              <label for="facebook" className="form-label">Titre</label>
              <input
                className="form-control"
                type="text"
                name='skills'
              />
            </div>
          </div>

        </div>

      </div>

      <div className="mt-4 form-group">
        <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-3">
              <label for="facebook" className="form-label">Facebook</label>
              <input
                type="text"
                className="form-control"
                name='facebook'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="twitter" className="form-label">Twitter</label>
              <input
                type="text"
                className="form-control"
                name='twitter'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="linkedin" className="form-label">Linkedin</label>
              <input
                type="text"
                className="form-control"
                name='linkedin'
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mb-3">
              <label for="whatsapp" className="form-label">Whatsapp</label>
              <input
                type="text"
                className="form-control"
                name='whatsapp'
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-end">
        <button type='submit' className="btn btn-primary">Envoyer</button>
      </div>
      {/* {progress === 0 ? null : (
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`uploading image ${progress}%`}
          </div>
        </div>
      )} */}
    </form>
  )
}

export default EditCandidate