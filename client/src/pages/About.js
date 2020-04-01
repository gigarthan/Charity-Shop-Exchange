import React from "react";
import Layout from "../components/Layout";
import twitter from "../assets/img/twitter.svg";
import discord from "../assets/img/discord.svg";
import github from "../assets/img/github.svg";
import blake from "../assets/img/Blake Prouty@2x.png";
import kelvin from "../assets/img/kelvin@2x.png";
import matt from "../assets/img/Matt Doyle@2x.png";
import dicky from "../assets/img/Dicky Jiang@2x.png";
import generic from "../assets/img/generic@2x.png";
import marina from "../assets/img/marina@2x.png";

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

      <div className="bg-new-gray flex flex-col sm:flex-none pt-12 pb-20 ">
        <h2 className="text-center text-2xl sm:text-4xl font-bold text-new-lightnavy px-5 mb-12 leading-snug">
          Making Charity Shop Exchange possible
        </h2>

        <div className="flex flex-wrap justify-around mx-auto sm:max-w-screen-md">

          <div>
            <div className="flex items-start p-4 m-4 w-64">
              <img
                className="h-12 w-12 mr-5 bg-gray-600 rounded-full"
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
                <p className="text-xs text-gray-600">
                  Placeholder for short bio.
              </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start p-4 m-4 w-64">
              <img
                className="h-12 w-12 mr-4 bg-gray-600 rounded-full"
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
                <p className="text-xs text-gray-600">
                  Placeholder for short bio.
              </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start p-4 m-4 w-64">
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
                  <a href="https://github.com/dickyjiang">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={github} alt="github" />
                  </a>
                </div>
                <p className="text-xs text-gray-600">
                  UIX Designer by day, Jaeger pilot by night.
              </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-start p-4 m-4 w-64">
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
                  <a href="">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={twitter} alt="twitter" />
                  </a>
                  <a href="">
                    <img className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1" src={github} alt="github" />
                  </a>
                
                </div>
                <p className="text-xs text-gray-600">
                  Placeholder for short bio.
              </p>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>

      <div className="items-center pt-8 pb-24 sm:pt-12 px-4 sm:px-12 pt-32 pb-40">
        <div className="flex items-center flex-col sm:max-w-screen-lg mx-auto px-3 sm:px-0">
          <div className="text-center px-5 mb-2 sm:mb-2 text-3xl sm:text-5xl sm:max-w-screen-xl mx-auto font-semibold text-gray-700 tracking-wide">
            Want to join the cause?
              </div>
          <p className="px-5 text-center text-sm sm:text-xl text-gray-600 font-medium mb-8 tracking-normal">
            We are always looking for amazing people regardless of experience.
              </p>
          <button className="bg-new-red py-2 sm:py-4 px-12 sm:px-20 text-sm sm:text-lg mt-4 sm:mt-0 font-medium py-1  rounded-full text-white border-2">
            Contact Us
              </button>
        </div>
      </div>

      <div className="bg-new-lightnavy items-center mx-auto pt-12 pb-20 sm:p-24 px-4 sm:px-12">
        <div className="flex items-center flex-col lg:flex-row sm:max-w-screen-lg mx-auto px-3 sm:px-0">
          <div className="flex-1 text-center mb-8 lg:mb-0 lg:text-left text-lg lg:text-2xl font-semibold text-gray-200 tracking-wide">
            Have an idea you'd like to contribute?
              <span className="block">
              A new service you'd like to see?
                </span>
          </div>
          <button className="flex-initial py-2 sm:py-4 px-12 sm:px-20 text-sm sm:text-lg mt-4 font-medium rounded-full text-white border-2">
            Contact Us
              </button>
        </div>
      </div>
    </Layout>
  );
}
