import React from 'react';
import ReactDOM from 'react-dom';

const Dialog = ({ isLarge = false, isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog">
            <div
              id="modal"
              className={
                isLarge ? 'modal modal-lg charity_modal p-8 max-w-sm' : 'modal'
              }>
              <div className="modal-container">
                <div className="modal-header">
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                {children}
              </div>
            </div>
          </div>
        </>,
        document.body,
      )
    : null;

export default Dialog;
