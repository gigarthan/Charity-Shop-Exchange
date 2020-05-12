import React from 'react'
import SmoothCollapse from 'react-smooth-collapse'

export default function Collapsable({ children, title, open, toggle }) {
  const getArrowIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#5f5c5c"
        width="18px"
        height="18px"
      >
        <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    )
  }

  const triggerToggle = () => {
    if (toggle) {
      toggle()
    }
  }

  return (
    <div>
      <button
        onClick={triggerToggle}
        className="flex mb-2 items-center collapsable-btn"
      >
        <div
          className={
            open ? 'mr-4 collapsable-icon open' : 'mr-4 collapsable-icon'
          }
        >
          {getArrowIcon()}
        </div>
        <div>
          <h3 className="text-gray-700">{title}</h3>
        </div>
      </button>

      <SmoothCollapse expanded={open}>
        <div className="pl-2 pr-2 mb-4">{children}</div>
      </SmoothCollapse>
    </div>
  )
}
