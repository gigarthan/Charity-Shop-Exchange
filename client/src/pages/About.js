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
      <container className="mx-auto">
      <h1 className="text-2xl sm:text-4xl px-3 font-bold text-center mt-12 mb-8 sm:mb-20 text-red-700 leading-snug">
        Why we built Charity Shop Exchange
      </h1>
      <div className="w-4/5 mx-auto px-5 text-sm sm:text-xl text-lg text-gray-700 font-normal mb-12 sm:mb-20 leading-relaxed sm:leading-relax">
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
      <blockquote className="w-3/4 mx-auto text-center text-2xl sm:text-3xl font-medium text-gray-700 px-5 mb-12 sm:mb-20 leading-snug">
        A nationwide network of charity shops{" "}
        <em className="text-gray-500">meets</em> cooperative approach{" "}
        <em className="text-gray-500">meets</em> online subscription box
        service.
      </blockquote>
      <p className="w-4/5 mx-auto px-5 text-sm sm:text-xl text-gray-700 font-normal mb-12 sm:mb-20 leading-relaxed sm:leading-relax">
        This fast response and joined-up thinking serve as inspiration for many
        other use cases, where a dedicated online service could take orders on
        behalf of a syndication of suppliers. And we're open to working together
        on digital projects that see the value in this approach.
      </p>
      <h2 className="w-3/4 mx-auto text-center text-2xl sm:text-3xl font-semibold text-gray-700 px-5 mb-8 sm:mb-8 leading-snug">
        Making Charity Shop Exchange Possible
      </h2>

      <div className="flex flex-wrap w-4/5 max-w-6xl items-stretch px-5 pt-5 pb-8 mx-auto mb-12 bg-gray-300">
        
        <div className="max-1/4">
          <div className="flex items-start p-4 m-4">
            <img className="h-12 w-12 mr-5 bg-gray-600 rounded-full" src={kelvin} alt="Kelvin" />
          
                <div>
                        <h3 className="text-xl font-semibold text-gray-700">
                          Kelvin Lockwood
                        </h3>
                        <div className="flex items-center">
                          <a href="">
                            <img className="p-1" src={twitter} alt="twitter" />
                          </a>
                          <a href="">
                            <img className="p-1" src={github} alt="github" />
                          </a>
                          <a href="">
                            <img className="p-1" src={discord} alt="discord" />
                          </a>
                        </div>
                        <p className="text-xs text-gray-600">Placeholder for short bio.</p>
                </div>
        </div>
        </div>


        
        <div className="max-1/4">
        <div className="flex items-start p-4 m-4">
                <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full" src={blake} alt="Blake" />
                <div>
                        <h3 className="text-xl font-semibold text-gray-700">
                          Blake Prouty
                        </h3>
                        <div className="flex items-center">
                        <a href="">
                          <img className="p-1" src={twitter} alt="twitter" />
                        </a>
                        <a href="">
                          <img className="p-1" src={github} alt="github" />
                        </a>
                        <a href="">
                          <img className="p-1" src={discord} alt="discord" />
                        </a>
                        </div>
                        <p className="text-xs text-gray-600">Placeholder for short bio.</p>
                </div>
        </div>
        </div>


      <div className="max-1/4">
        <div className="flex items-start p-4 m-4">
          <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full" src={dicky} alt="Dicky" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Dicky Jiang</h3>
            <div className="flex items-center">
            <a href="">
              <img className="p-1" src={twitter} alt="twitter" />
            </a>
            <a href="">
              <img className="p-1" src={github} alt="github" />
            </a>
            <a href="">
              <img className="p-1" src={discord} alt="discord" />
            </a>
            </div>
            <p className="text-xs text-gray-600">Placeholder for short bio.</p>
          </div>
        </div>
      </div>


      <div className="max-1/4">
        <div className="flex items-start p-4 m-4">
          <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full " src={matt} alt="Matt" />
          <div >
            <h3 className="text-xl font-semibold text-gray-700">Matt Doyle</h3>
            <div className="flex items-center">

            <a href="">
              <img className="p-1" src={twitter} alt="twitter" />
            </a>
            <a href="">
              <img className="p-1" src={github} alt="github" />
            </a>
            <a href="">
              <img className="p-1" src={discord} alt="discord" />
            </a>
            </div>
            <p className="text-xs text-gray-600">Placeholder for short bio.</p>
          </div>
        </div>
      </div>


      <div>
        <div className="flex items-start p-4 m-4">
          <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full object-cover " src={marina} alt="marina" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Marina Goto</h3>
            <div className="flex items-center">
            <a href="">
              <img className="p-1" src={twitter} alt="twitter" />
            </a>
            <a href="">
              <img className="p-1" src={github} alt="github" />
            </a>
            <a href="">
              <img className="p-1" src={discord} alt="discord" />
            </a>

            </div>
            <p className="text-xs text-gray-600">Placeholder for short bio.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-start p-4 m-4">
          <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full" src={generic} alt="generic" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Rama Mani</h3>
            <div className="flex items-center">

            <a href="">
              <img className="p-1" src={twitter} alt="twitter" />
            </a>
            <a href="">
              <img className="p-1" src={github} alt="github" />
            </a>
            <a href="">
              <img className="p-1" src={discord} alt="discord" />
            </a>
            </div>
            <p className="text-xs text-gray-600"> Placeholder for short bio.</p>
          </div>
        </div>
      </div>

      </div>
      <h2 className="w-3/4 mx-auto text-center text-2xl sm:text-3xl font-semibold  px-5 mb-8 sm:mb-12 leading-snug text-red-700">
        Want to join the cause?
      </h2>
      <p className="w-4/5 mx-auto px-5 text-center text-sm sm:text-xl text-gray-700 font-semibold mb-12 sm:mb-20 leading-relaxed sm:leading-relax">
        We are always looking for amazing people regardless of experience.
        <div className="mt-8"> 
        <button className="text-semibold text-red-700 font-semibold border-2 border-red-700 rounded-full px-5 py-2">Join the Force</button>
        </div>
      </p>
      <h2 className="w-4/5 mx-auto px-5 text-center text-sm sm:text-xl text-gray-700 font-semibold mb-12 sm:mb-20 leading-relaxed sm:leading-relax">
        Have an idea you'd like to contribute? A new service you'd like to see?
        <div>
        <button className="text-semibold text-red-700 font-semibold border-2 border-red-700 rounded-full px-5 py-2 mt-8">Contact Us</button>
        </div>
      </h2>
      </container>
      
    </Layout>
  );
}
