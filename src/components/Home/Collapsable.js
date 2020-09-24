import React from 'react';
import SmoothCollapse from 'react-smooth-collapse';

export default function Collapsable({ children, title, open, toggle }) {
  const getArrowIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#5f5c5c"
        width="18px"
        height="18px">
        <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    );
  };

  const triggerToggle = () => {
    if (toggle) {
      toggle();
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={triggerToggle}
        className="flex mb-2 collapsable-btn">
        <div
          className={
            open
              ? 'mr-4 collapsable-icon open accordion-tab'
              : 'mr-4 collapsable-icon accordion-tab'
          }>
          {getArrowIcon()}
        </div>
        <div>
          <h3 className="accordion-tab-title">{title}</h3>
        </div>
      </button>

      <SmoothCollapse expanded={open}>
        <div className="pl-10 mb-4">{children}</div>
      </SmoothCollapse>
    </div>
  );
}
