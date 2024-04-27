import React from 'react'

export const Hero = () => {
  return (
    <>
      <div className="row gy-4 gy-md-0">
  <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
    <div style={{ maxWidth: 350 }}>
      <h2 className="text-uppercase fw-bold">
        Biben dum
        <br />
        <span style={{color:'#4d2692'}}>fringi dictum, augue purus</span>
      </h2>
      <p className="my-3">
        Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien,
        risus donec ad fusce augue interdum.
      </p>
      <div>
  <a
    className="btn btn-primary btn-lg me-2"
    href="#"
    role="button"
    style={{
      background: '#4d2692',
      borderColor: '#4d2692'
    }}
  >
    Create Avatar
  </a>
  <a
    className="btn btn-lg mt-sm-1"
    href="#"
    role="button"
    style={{
      borderColor: '#4d2692',
      color: 'rgb(255,255,255)',
      marginBottom: '-7px'
    }}
  >
    Sign Up
  </a>
</div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="p-xl-5 m-xl-5">
      <img
        className="rounded img-fluid w-100 fit-cover"
        style={{ minHeight: 300 }}
        src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
      />
    </div>
  </div>
</div>

    </>
  )
}
