import React from 'react'
import '../assets/css/accordion-faq-list.css';

export const Faq = (props) => {
  return (
    <div className="accordion-item">
    <h2
      className="accordion-header"
      role="tab"
    >
      <button
        aria-controls={`accordion-1 .item-${props.id}`}
        aria-expanded="true"
        className="accordion-button collapsed"
        data-bs-target={`#accordion-1 .item-${props.id}`}
        data-bs-toggle="collapse"
        style={{
          color: 'rgb(255,255,255)',
          fontWeight: 'bold'
        }}
        type="button"
      >
        {props.textHeader}
      </button>
    </h2>
    <div
      className={`accordion-collapse collapse item-${props.id}`}
      data-bs-parent={`#accordion-${props.id}`}
      role="tabpanel"
    >
      <div className="accordion-body">
        <p
          className="mb-0"
          style={{
            color: 'rgb(144,146,149)'
          }}
        >
         {props.textContent}
          </p>
      </div>
    </div>
  </div>
  )
}
