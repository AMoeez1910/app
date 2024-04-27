import React from 'react'

export const HeroContent = () => {
  return (
    <section className="py-4 py-xl-5">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
          <div>
            <h2 className="text-uppercase fw-bold mb-3">Lets get  <span style={{color:'#4d2692'}}>started!</span></h2>
            <p className="mb-4">Become part of AVTFAM</p>
            <a
              className="btn btn-primary btn-lg me-2"
              role="button"
              href="#"
              style={{ background: "#6b35cb", borderColor: "#4d2692" }}
            >
              Join Affiliated Program
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
