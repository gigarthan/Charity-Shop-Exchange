import React from "react";
import Layout from "../components/Layout";
import twitter from "../assets/img/twitter.svg";
import github from "../assets/img/github.svg";
import instagram from "../assets/img/ig.svg";
import dribbble from "../assets/img/dribbble.svg";
import behance from "../assets/img/be.svg";
import blake from "../assets/img/Blake Prouty@2x.png";
import kelvin from "../assets/img/kelvin@2x.png";
import matt from "../assets/img/Matt Doyle@2x.png";
import dicky from "../assets/img/Dicky Jiang@2x.png";
import generic from "../assets/img/generic@2x.png";
import jasmine from "../assets/img/Jasmine@2x.png";
import batsman from "../assets/img/batsman@2x.png";
import beer from "../assets/img/beer@2x.png";


export default function About() {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-none sm:max-w-screen-md mx-auto pt-12 pb-20 px-3 sm:px-0 ">
        <h1 className="text-3xl sm:text-5xl font-semibold px-3 font-bold text-center mt-12 mb-8 sm:mb-12 text-new-red leading-snug">
          Why we built Charity Shop Exchange
      </h1>
        <div className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
          <p className="mb-4">
            With the COVID-19 pandemic reaching all parts of the world, a global
            team of web developers, designers and makers have come together to
            address some of the challenges we all face being isolated.
        </p>
          <p className=" mb-4">
            At first we pictured the delight people get from receiving books and
            DVDs and thought about how delivering these items to doorsteps could
            help combat isolation.
        </p>
          <p className=" mb-4">
            From there we set out to see how the subscription-box-service business
            model could be retrofitted into the landscape of local charity shops,
            of which we have more than ten thousand in the UK.
        </p>
        </div>
        <blockquote className="w-4/5 mx-auto text-center text-2xl sm:text-3xl font-medium text-gray-800 mb-8 sm:mb-12 leading-snug">
          A nationwide network of charity shops{" "}
          <em className="text-gray-500">meets</em> cooperative approach{" "}
          <em className="text-gray-500">meets</em> online subscription box
        service.
      </blockquote>
        <p className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
          This fast response and joined-up thinking serve as inspiration for many
          other use cases, where a dedicated online service could take orders on
          behalf of a syndication of suppliers. And we're open to working together
          on digital projects that see the value in this approach.
      </p>

      </div>

      <div className="bg-new-gray flex flex-col sm:flex-none pt-12 pb-20">
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-new-lightnavy px-5 mb-12 leading-snug">
          Making Charity Shop Exchange possible
        </h2>


        

        <div className="sm:flex sm:flex-wrap px-12 justify-between w-full mx-auto items-center sm:max-w-screen-md">


          <div>
            <div className="flex items-start w-64 mb-8 ">
              <img
                className="h-12 w-12 mr-5 rounded-full"
                src={kelvin}
                alt="Kelvin"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                  Kelvin Lockwood
              </h3>
                <div className="flex items-center cursor-pointer">
                  <a href="https://twitter.com/kelvinlockwood">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={twitter} alt="twitter" />
                  </a>
                  <a href="https://github.com/kelvinlockwood/">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={github} alt="github" />
                  </a>
                  
                </div>
                <p className="text-xs text-gray-600 mt-2">
                Product owner, design thinker and opening batsman. <img className="w-5" src={batsman} alt="batsman">
                </img>
              </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start w-64 mb-8 ">
              <img
                className="h-12 w-12 mr-5 rounded-full"
                src={blake}
                alt="Blake"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                  Blake Prouty
              </h3>
                <div className="flex items-center cursor-pointer">
                  <a href="https://twitter.com/BlakeNthaniel">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={twitter} alt="twitter" />
                  </a>
                  <a href="https://github.com/Prouty89">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={github} alt="github" />
                  </a>
                
                </div>
                <p className="text-xs text-gray-600 mt-2">
                Full Stack Web Developer based in the United States.
              </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start w-64 mb-8">
              <img
                className="h-12 w-12 mr-4 rounded-full"
                src={dicky}
                alt="Dicky"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                  Dicky Jiang
              </h3>
                <div className="flex items-center cursor-pointer">
                  <a href="https://twitter.com/jiangd">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={twitter} alt="twitter" />
                  </a>
                  <a href="https://dribbble.com/Dickyjiang">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={dribbble} alt="Dribbble" />
                  </a>
                  <a href="https://www.behance.net/DickyJiang">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={behance} alt="behance" />
                  </a>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  UIX Designer by day, Jaeger pilot by night.
              </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start w-64 mb-8">
              <img
                className="h-12 w-12 mr-4 bg-gray-600 rounded-full "
                src={matt}
                alt="Matt"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                  Matt Doyle
              </h3>
                <div className="flex items-center cursor-pointer">
                  <a href="https://twitter.com/ElatedDotCom">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={twitter} alt="twitter" />
                  </a>
                  <a href="https://github.com/globalmatt">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={github} alt="github" />
                  </a>
                
                </div>
                <p className="text-xs text-gray-600 mt-2">
                Full-Stack Developer, Technical Author and Blogger. 
              </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start w-64 mb-8">
              <img
                className="h-12 w-12 mr-4 bg-gray-600 rounded-full "
                src={jasmine}
                alt="Jasmine King"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                Jasmine King
              </h3>
                <div className="flex items-center cursor-pointer">
                  <a href="https://www.instagram.com/jasmineaking">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={instagram} alt="instagram" />
                  </a>
                  <a href="https://dribbble.com/Jasminargh">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={dribbble} alt="dribbble" />
                  </a>
                
                </div>
                <p className="text-xs text-gray-600 mt-2">
                Illustrator, designer and craft beer lover. <img className="w-4" src={beer} />
              </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-new-red items-center pt-20 pb-24 sm:pb-32 px-4 sm:px-12">
        <div className="flex flex-col text-center sm:max-w-screen-lg mx-auto px-3 sm:px-0">
          <div className="font-header px-5 mb-12 sm:mb- text-3xl sm:text-5xl sm:max-w-screen-xl mx-auto font-bold text-new-navy ">
          Join our fight against isolation
          </div>

          <div className="flex-1 mb-8 sm:mb-0 text-center text-md sm:text-2xl font-normal text-white tracking-wider leading-normal">
          Do you have an idea you'd like to contribute?
          <span className="block mt-8 sm:mt-4">
          Is there a new delivery service you'd like to see?
          </span>
          <span className="block mt-8 sm:mt-4">
          Want to volunteer?
          </span>
          </div>
          <a href="mailto:together@charityshopexchange.com" target="_top"><button className="flex-initial bg-new-navy py-2 sm:py-3 px-12 sm:px-12 text-sm sm:text-lg mt-20 font-base rounded-full text-white  hover:border-none focus:outline-none focus:shadow-outline hover:bg-red-700 ">
          Contact Us
          </button></a>
          
        </div>
      </div>
    </Layout>
  );
}
