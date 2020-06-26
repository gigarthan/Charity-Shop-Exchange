import React from 'react';

import batsman from '../assets/img/batsman@2x.png';
import behance from '../assets/img/be.svg';
import beer from '../assets/img/beer@2x.png';
import blake from '../assets/img/Blake Prouty@2x.png';
import charityexcellentlogo from '../assets/img/charityexcellent-logo.png';
import dicky from '../assets/img/Dicky Jiang@2x.png';
import dribbble from '../assets/img/dribbble.svg';
import engjell from '../assets/img/Engjell.png';
import github from '../assets/img/github.svg';
import instagram from '../assets/img/ig.svg';
import jasmine from '../assets/img/Jasmine@2x.png';
import kelvin from '../assets/img/kelvin@2x.png';
import matt from '../assets/img/Matt Doyle@2x.png';
import twitter from '../assets/img/twitter.svg';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-none sm:max-w-screen-md mx-auto pt-12 pb-20 px-3 sm:px-0 ">
        <div className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
          <p className="mb-4">
            With the COVID-19 pandemic reaching all parts of the world, a team
            of web developers, designers and makers quickly came together to
            address some of the challenges we all face with reduced social
            interaction.
          </p>
          <p className=" mb-4">
            At first we thought about the delight people get from receiving
            books and DVDs and how delivering these items to doorsteps could
            help combat isolation
          </p>
          <p className=" mb-4">
            From there we set out to see how the subscription-box-service
            business model could be retrofitted into the landscape of local
            charity shops, of which we have more than ten thousand in the UK.
          </p>
        </div>
        <blockquote className="w-4/5 px-3 py-3 text-lg mx-auto bg-gray-300 text-gray-700 mb-8">
          <strong>
            By bringing a cooperative approach to the nation&apos;s vast network
            of charity shops we&apos;ve developed a robust, dedicated online
            service. Welcome to Charity Shop Exchange.
          </strong>
        </blockquote>
        <p className="w-4/5 mx-auto text-base sm:text-lg text-gray-700 font-normal mb-8 sm:mb-12 leading-relaxed sm:leading-relax">
          The way Charity Shop Exchange brings together buyers and sellers can
          serve as inspiration for other use cases, where the dedicated online
          service takes orders on behalf of a syndication of suppliers.
          We&apos;re open to working together on digital projects that also see
          value in this approach, just let us know how you think we may be able
          to help you.
        </p>
        <div className="flex flex-col justify-center mt-4 w-4/5 mx-auto">
          <span className="text-base sm:text-lg text-gray-500 font-normal mb-4 leading-relaxed text-center">
            Proudly listed on the Charity Excellence COVID19 funder database
          </span>
          <a className="block" href="https://www.charityexcellence.co.uk/">
            <img
              className="h-20 mx-auto"
              src={charityexcellentlogo}
              alt="charity-excellent"
            />
          </a>
        </div>
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
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={twitter}
                      alt="twitter"
                    />
                  </a>
                  <a href="https://github.com/kelvinlockwood/">
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={github}
                      alt="github"
                    />
                  </a>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Product owner, design thinker and opening batsman.{' '}
                  <img className="w-5" src={batsman} alt="batsman" />
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
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={twitter}
                      alt="twitter"
                    />
                  </a>
                  <a href="https://github.com/Prouty89">
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={github}
                      alt="github"
                    />
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
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={twitter}
                      alt="twitter"
                    />
                  </a>
                  <a href="https://dribbble.com/Dickyjiang">
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={dribbble}
                      alt="Dribbble"
                    />
                  </a>
                  <a href="https://www.behance.net/DickyJiang">
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={behance}
                      alt="behance"
                    />
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
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={twitter}
                      alt="twitter"
                    />
                  </a>
                  <a href="https://github.com/globalmatt">
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={github}
                      alt="github"
                    />
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
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={instagram}
                      alt="instagram"
                    />
                  </a>
                  <a href="https://dribbble.com/Jasminargh">
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={dribbble}
                      alt="dribbble"
                    />
                  </a>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Illustrator, designer and craft beer lover.{' '}
                  <img className="w-4" src={beer} alt="Beer" />
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start w-64 mb-8">
              <img
                className="h-12 w-12 mr-4 bg-gray-600 rounded-full "
                src={engjell}
                alt="Engjell Selaci"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-700">
                  Engjell Selaci
                </h3>
                <div className="flex items-center cursor-pointer">
                  <a href="https://github.com/engjellselaci">
                    <img
                      className="pr-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
                      src={github}
                      alt="github"
                    />
                  </a>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  Full Stack Web Developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
