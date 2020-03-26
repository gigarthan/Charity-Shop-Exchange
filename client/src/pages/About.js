import React from 'react';
import Layout from '../components/Layout';
import twitter from "../assets/img/twitter.svg";
import discord from "../assets/img/discord.svg";
import github from "../assets/img/github.svg";
import marina from "../assets/img/marina@2x.png";

export default function About() {

  return (
    <Layout className="max-w-md mx-auto px-20">
      <h1 className="text-3xl font-bold  text-center mt-12 mb-8 text-red-700">Why we built Charity Shop Exchange</h1>
      <div className="px-5 text-base text-gray-700 font-semibold mb-12">
      <p className=" mb-4"> 
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
        From there we set out to see how the subscription-box-service 
        business model could be retrofitted into the landscape of local
        charity shops, of which we have more than ten thousand in the UK.      
      </p>
      </div>
      <blockquote className="text-2xl font-semibold text-gray-700 px-5 mb-12">
        A nationwide network of charity shops <em className="text-gray-500">meets</em> cooperative
        approach <em className="text-gray-500">meets</em> online subscription box service.
      </blockquote>
      <p className="px-5 text-base text-gray-700 font-semibold mb-8">
        This fast response and joined-up thinking serve as inspiration for
        many other use cases, where a dedicated online service could take
        orders on behalf of a syndication of suppliers. And we're open to
        working together on digital projects that see the value in this
        approach.
      </p>
      <h2 className="text-3xl font-bold text-center mt-12 mb-8 text-new-navy" >Making Charity Shop Exchange Possible</h2>

      <div className="flex flex-wrap mx-auto px-8 w-screen">

      <div className="flex items-start p-4 w-64">
        <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full " />
        <div>
        <h3 className="text-xl font-semibold text-gray-700">Kelvin Lockwood</h3>
        <a href=""> <img className="sm:mr-32" src={twitter} alt="twitter" /></a>
        <a href="">GitHub</a>
        <a href="">Discord</a>
        <p className="text-xs text-gray-600">Placeholder for short bio.</p>

    
        </div>
      </div>

      <div className="flex items-start p-4 w-64" >
        <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full "/>
        <div>
        <h3 className="text-xl font-semibold text-gray-700">Blake Prouty</h3>
        <a href=""><img className="sm:mr-32" src={twitter} alt="twitter" /></a>
        <a href="">GitHub</a>
        <a href="">Discord</a>
        <p className="text-xs text-gray-600">Placeholder for short bio.</p>

        </div>
      </div> 
      <div className="flex items-start p-4 w-64">
        <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full "/>
        <div>
        <h3 className="text-xl font-semibold text-gray-700">Dicky Jiang</h3>
        <a href=""><img className="sm:mr-32" src={twitter} alt="twitter" /></a>
        <a href="">GitHub</a>
        <a href="">Discord</a>
        <p className="text-xs text-gray-600" >Placeholder for short bio.</p>
        </div>
      </div>
      <div className="flex items-start p-4 w-64"> 
        <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full "/>
        <div>
        <h3 className="text-xl font-semibold text-gray-700">Matt Doyle</h3>
        <a href=""><img className="sm:mr-32" src={twitter} alt="twitter" /></a>
        <a href="">GitHub</a>
        <a href="">Discord</a>
        <p className="text-xs text-gray-600">Placeholder for short bio.</p>
        </div>
      </div>
      <div className="flex items-start p-4 w-64">
        <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full "/>
        <div>

        <h3 className="text-xl font-semibold text-gray-700">Marina Goto</h3>
        <a href=""><img className="sm:mr-32" src={twitter} alt="twitter" /></a>
        <a href="">GitHub</a>
        <a href="">Discord</a>
        <p className="text-xs text-gray-600">Placeholder for short bio.</p>
        </div>
      </div>
      <div className="flex items-start p-4 w-64">
        <img className="h-12 w-12 mr-4 bg-gray-600 rounded-full " />
        <div>

        <h3 className="text-xl font-semibold text-gray-700">Rama Mani</h3>
        <a href=""><img className="sm:mr-32" src={twitter} alt="twitter" /></a>
        <a href="">GitHub</a>
        <a href="">Discord</a>
        <p className="text-xs text-gray-600"> Placeholder for short bio.</p>
        </div>
      </div>                

      </div>
      <h2>Want to join the cause?</h2>
      <p>
        We are always looking for amazing people regardless of experience.
        <button>Join the Force</button>
      </p>
      <h2>
        Have an idea you'd like to contribute? A new service you'd like to
        see?
        <button>Contact Us</button>
      </h2>
    </Layout>
  );
}
