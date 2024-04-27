import React from 'react'
import  '../assets/css/Navbar-Centered-Links-icons.css'
import '../App.css'
export const Navbar = () => {
  return (
    <nav
  className="navbar navbar-expand-md fixed-top py-3"
  style={{
    background: 'radial-gradient(#777777 0%, var(--bs-purple) 0%, rgb(95,72,138) 0%, rgb(90,74,122) 0%, rgb(64,47,97) 1%, rgb(73,68,84) 98%, #4e4e4e 100%, rgb(81,77,88) 100%, rgb(83,76,95) 100%, rgb(83,76,95) 100%), var(--bs-purple)',
    color: '#ffffff'
  }}
>
  <div className="container">
    <a
      className="navbar-brand d-flex align-items-center"
      href="#"
    >
      <span
        style={{
          color: '#ffffff'
        }}
      >
        Revolut
      </span>
    </a>
    <button
      className="navbar-toggler"
      data-bs-target="#navcol-3"
      data-bs-toggle="collapse"
      style={{
        background: 'var(--bs-purple)'
      }}
    >
      <span className="visually-hidden">
        Toggle navigation
      </span>
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse"
      id="navcol-3"
    >
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a
            className="nav-link active fw-semibold"
            href="#"
            style={{
              color: '#ffffff'
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            style={{
              color: '#ffffff'
            }}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            style={{
              color: '#ffffff'
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <a
        href="#"
        style={{
          color: 'rgb(255,255,255)',
          fontWeight: 'bold',
          marginBottom: '-20px',
          marginRight: '0px',
          marginTop: '-19px',
          paddingRight: '12px',
          paddingTop: '0px',
          textDecoration: 'none'
        }}
      >
        Login
      </a>
      <button
        className="btn"
        style={{
          background: '#4d2692',
          color: 'var(--bs-body-bg)',
          marginBottom: '-5px',
          marginLeft: '-2px',
          marginRight: '-12px',
          marginTop: '-2px'
        }}
        type="button"
      >
        Create a free Account
      </button>
    </div>
  </div>
</nav>
  )
}
