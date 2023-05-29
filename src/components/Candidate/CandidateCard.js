import React, { useState } from "react";
import LikeButton from "./LikeButton";

const CandidateCard = ({ candidate, setOpen, open }) => {


  return (
    <div className="col-lg-4 col-md-6">
      <div className="candidate-grid-box bookmark-post card mt-4">
        <div className="card-body p-4">
          <div className="d-flex mb-4">
            <div className="flex-shrink-0 position-relative">
              <img src={candidate.candidatePic} alt="" className="avatar-md rounded" />

            </div>
            <div className="ms-3">
              <a href="/candidates/candidate-details" className="primary-link"><h5 className="fs-17">{candidate.name}</h5></a>
              <span className="badge bg-soft-info fs-13">${candidate.offredSalary}</span>
            </div>
          </div>
          <ul className="list-inline d-flex justify-content-between align-items-center">
            <li className="list-inline-item text-warning fs-17">
              {candidate.skills}
            </li>
            <li className="list-inline-item">
              <LikeButton id={candidate.id} likes={candidate.likes} />
            </li>
          </ul>
          <div className="border rounded mb-4">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="border-end px-3 py-2">
                  <p className="text-muted mb-0">Exp. : {candidate.exp}</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="px-3 py-2">
                  <p className="text-muted mb-0">{candidate.currentOccupation}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted ltext">{candidate.description}</p>
          <div className="mt-3">
            <button onClick={() => { setOpen(!open) }} className="btn btn-primary btn-hover w-100 mt-2"><i className="mdi mdi-account-check"></i> Hire Now</button>
            <a href="/candidates/candidate-details" className="btn btn-soft-primary btn-hover w-100 mt-2"><i className="mdi mdi-eye"></i> View Profile</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateCard