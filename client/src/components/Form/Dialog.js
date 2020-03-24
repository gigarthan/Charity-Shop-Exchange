import React from 'react';
import ReactDOM from 'react-dom';


const Dialog = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-700 mb-2">
              Save the day
            </div>
            <p className="block text-base sm:text-lg font-normal mt-8 text-gray-700">
              Are you a Charity Shop who’d like to keep stock ticking over despite being closed to the public?
              The Charity Shop Exchange subscription box service is here to save the day...
              We’re looking for Charity Shops across all regions of the UK to supply the demand that we have from our subscribers. In other words we’ll pay you for the items that you send or deliver.
              Please fill out the form below and we’ll get back to you right away.
            </p>
          </div>
          <div className="w-full max-w-xs">
            <form
                name="contact" method="POST" data-netlify="true"
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cname">
                  Charity name:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cname"
                    name="cname"
                    type="text"
                    placeholder="Charity name"/>
              </div>

           <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"/>
              </div>

           <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
                  Position:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="position"
                    name="position"
                    type="text"
                    placeholder="Position"/>
              </div>

           <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"/>
              </div>

           <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tel">
                  Mobile number:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="tel"
                    name="tel"
                    type="tel"
                    placeholder="Mobile number"/>
              </div>

           <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Any further information:
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    placeholder="Any further information"/>
              </div>
              <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
) : null;

export default Dialog;
