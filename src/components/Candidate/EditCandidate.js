import React, { useState, useEffect } from "react";

const EditCandidate = () => {

  return (
    <form action="#">
      <div>
        <h5 class="fs-17 fw-semibold mb-3 mb-0">Infos de base</h5>
        <div class="text-center">
          <div class="mb-4 profile-user">
            <div class="p-0 rounded-circle profile-photo-edit">
              <input
                type="file"
              // onChange={handleCandidatePicChange}
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Nom et prenom</label>
              <input
                type="text"
                class="form-control"

              />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Age</label>
              <input type="date" class="form-control"
                value="" />
            </div>
          </div>

          <div class="col-lg-12">
            <div class="mb-3 d-flex">
              <span _ngcontent-hgl-c27="">Gender</span>
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="text" class="form-control" id="email"
                value="Jansh@gmail.com" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Numero</label>
              <input type="text" class="form-control"
                value="+225 00 00 00 00 00" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="languages" class="form-label">Langages</label>
              <input type="text" class="form-control" id="languages"
                value="English, German, French" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Adresse</label>
              <input type="text" class="form-control"
                value="" />
            </div>
          </div>

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Présentez-vous</label>
              <textarea class="form-control"
                rows="5" />
            </div>
          </div>
        </div>

      </div>

      <div class="mt-4">
        <h5 class="fs-17 fw-semibold mb-3">Parcourt</h5>
        <div class="row">

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Diplôme</label>
              <input type="text" class="form-control"
                value="" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Institut</label>
              <input type="text" class="form-control"
                value="" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Année</label>
              <input type="text" class="form-control"
                value="" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label">Commentaire</label>
              <input type="text" class="form-control"
                value="" />
            </div>
          </div>

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label">Joindre CV</label>
              <input class="form-control" type="file" id="attachmentscv" />
            </div>
          </div>

        </div>

      </div>

      <div class="mt-4">
        <h5 class="fs-17 fw-semibold mb-3">Compétences </h5>
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-3">
              <label for="facebook" class="form-label">Titre</label>
              <input type="text" class="form-control" id="facebook"
                value="User Interface, Design Web, Design Responsive, Design Mobile, App Design, UI Design...." />
            </div>
          </div>

        </div>

      </div>

      <div class="mt-4">
        <h5 class="fs-17 fw-semibold mb-3">Social Media</h5>
        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <label for="facebook" class="form-label">Facebook</label>
              <input type="text" class="form-control" id="facebook"
                value="https://www.facebook.com/" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="twitter" class="form-label">Twitter</label>
              <input type="text" class="form-control" id="twitter"
                value="https://www.twitter.com/" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="linkedin" class="form-label">Linkedin</label>
              <input type="text" class="form-control" id="linkedin"
                value="https://www.linkedin.com/" />
            </div>
          </div>

          <div class="col-lg-6">
            <div class="mb-3">
              <label for="whatsapp" class="form-label">Whatsapp</label>
              <input type="text" class="form-control" id="whatsapp"
                value="https://www.whatsapp.com/" />
            </div>
          </div>

        </div>

      </div>

      <div class="mt-4 text-end">
        <a href="javascript:void(0)" class="btn btn-primary">Update</a>
      </div>
    </form>
  )
}

export default EditCandidate