import React from 'react'

export const HeroCont = () => {
  return (
  <div className="container h-100">
    <div className="row h-100">
      <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
        <div>
          <h2 className="text-uppercase fw-bold mb-3">
            Biben dum
            <br />
            <span style={{color:'#4d2692'}}>fringi dictum, augue purus</span>
          </h2>
          <p className="mb-4">
            Etiam a rutrum, mauris lectus aptent convallis. Fusce vulputate
            aliquam, sagittis odio metus. Nulla porttitor vivamus viverra
            laoreet, aliquam netus.
          </p>
          <a
            className="btn btn-primary btn-lg me-2"
            role="button"
            href="#"
            style={{ background: "#4d2692", borderColor: "#4d2692" }}
          >
            Create Avatar
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
