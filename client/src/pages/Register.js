import React, {useState} from "react";
import Layout from "../components/Layout";



export default function Register() {

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const [contact, setContact] = useState({ name: "", email: "", cname: "", position: "", message: "", number: ""});


  const handleSubmit = e => {
    const state = { 
      name: contact.name, 
      email: contact.email, 
      message: contact.message, 
      cname: contact.cname, 
      number: contact.number, 
      position: contact.position
     }
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": 'application/x-www-form-urlencoded' },
      body: encode({ "form-name": "contact", ...state})
    })
    .then(console.log("Contact-State: ",state))
    .catch(error => alert(error));
  
    e.preventDefault();
  };

  const handleChange = e => {
    const updatedContact = {
      ...contact,
      [e.target.name]: e.target.value
    };
    setContact(updatedContact)
  };

  


  return (
    <Layout>
      <div className="bg-new-navy">
            <div className="font-header text-lg leading-normal sm:text-2xl sm:text-4xl px-8 sm:px-0 text-center font-medium max-w-screen-sm sm:max-w-screen-md mx-auto tracking-wide text-white mb-2 sm:mb-4 pt-12 sm:pt-20 pb-20 sm:pb-32">
              Are you a charity shop who’d like to keep stock ticking over despite
              being closed to the public?
            </div>
        <div className="flex flex-col items-center bg-gray-100">
          <div className="-mt-10 sm:-mt-20 mx-auto w-11/12 max-w-4xl bg-white py-12 px-4 sm:px-20 mb-40 rounded-lg shadow-2xl">
            <div>
              <h1 className="font-header text-center text-lg sm:text-3xl font-bold text-gray-700 mb-8 tracking-wide leading-snug">
                The Charity Shop Exchange subscription box service is here to
                save the day!
              </h1>
              <p className="text-xs sm:text-lg text-center font-medium sm:font-semibold mt-4 text-gray-600 leading-normal">
                We’re looking for charity shops across all regions of the UK to
                supply the demand that we have from our subscribers. In other
                words, we collect payments and then pay you for the items that
                you send or deliver.
              </p>
              <p className="text-xs sm:text-lg text-center font-medium sm:font-semibold mt-12 text-gray-600 leading-normal">
                Please fill out the form below and we’ll get back to you right away.
              </p>
              <div className="bg-gray-400 h-px mt-8 mb-10"> </div>

              <div>
                <form
                  onSubmit={handleSubmit} 
                  className=" w-11/12 mx-auto pt-6 pb-8 mb-4"
                  action= "thank-you"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="mb-12">
                    <label
                      className="block text-gray-600 text-sm sm:text-base font-medium sm:font-semibold mb-4"
                      htmlFor="name"
                    >
                      Your Name:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose border-gray-300 rounded w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={contact.name}
                      onChange={handleChange}/>
                    
                  </div>

                  <div className="mb-12">
                    <label
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="cname"
                    >
                      Your Charity:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose border-gray-300 rounded w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="cname"
                      name="cname"
                      type="text"
                      placeholder="Charity name"
                      value={contact.cname}
                      onChange={handleChange}/>
                    
                  </div>

                  <div className="mb-12">
                    <label
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="position"
                    >
                      Your responsibilities at the charity:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="position"
                      name="position"
                      type="text"
                      placeholder="Position"
                      value={contact.position}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      value={contact.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="number"
                    >
                      Mobile Number:
                    </label>
                    <input
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="number"
                      name="number"
                      type="text"
                      placeholder="Mobile number"
                      value={contact.number}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-12">
                    <label
                      className="block text-gray-600 text-sm sm:text-base font-semibold mb-4"
                      htmlFor="message"
                    >
                      Feel free to tell us more about your charity shops:
                    </label>
                    <textarea
                      className="appearance-none border text-sm sm:text-base tracking-loose rounded border-gray-300 w-full py-3 sm:py-4 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      type="text"
                      placeholder="Any further information"
                      value={contact.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <button
                      className="bg-red-700 rounded-full hover:bg-red-800 text-white text-md font-medium py-3 px-20 mt-6 sm:mt-8 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
