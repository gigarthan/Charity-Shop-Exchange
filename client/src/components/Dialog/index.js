import React from 'react'
import ReactDOM from 'react-dom'

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
            role="dialog"
          >
            <div className={isLarge ? 'modal modal-lg' : 'modal'}>
              <div className="modal-container">
                <div className="flex items-start justify-between rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={hide}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {children}
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null

export default Dialog
