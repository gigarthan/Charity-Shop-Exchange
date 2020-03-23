import React from "react";

import Select from './components/Select';
import Combo from './components/Combo';

import logo from "./assets/img/logo@2x.png";
import balloon from "./assets/img/balloon@2x.png";
import hero from "./assets/img/hero_01_girl.png";
import boxes from "./assets/img/boxes.png";
import wish from "./assets/img/wish@2x.png";
import deliver from "./assets/img/deliver@2x.png";
import enjoy from "./assets/img/enjoy@2x.png";


function App() {
  return (
    <div className="App">
      <div>
        <div className="flex justify-between py-4 px-12 max-w-screen bg-white border-b-2 shadow-lg mx-auto">
          <div>
            <img className="w-40" src={logo} />
          </div>
          <div className="flex items-center">
            <div className="mx-4 text-md font-medium text-gray-500">menu 1</div>
            <div className="mx-4 text-md font-medium text-gray-500">menu 2</div>
            <div className="mx-4 text-md font-medium text-gray-500">menu 3</div>
            <div className="mx-4 text-md font-medium text-gray-500">
              Subscribe
            </div>
            <button className="py-2 px-12 bg-red-700 rounded-full text-white ml-4 ">
              Login
            </button>
          </div>
        </div>

        {/* Hero section */}
        {/* hero left */}
        <div className="flex items-stretch w-4/5 mt-12 mx-auto items-end">
          <div className="flex-1 pb-12 mr-4">
            <h1 className="text-5xl font-bold text-red-700 leading-tight mb-6">
              Fighting isolation with Books, DVDs, and Games
            </h1>
            <h3 className="text-xl text-gray-500 font-md mb-12">
              Every week a friendly neighbour will collect items from local
              charity shops and drop them at your door.
            </h3>
            <div className="w-64 py-4 px-8 bg-red-700 rounded-full text-white text-center">
              Subscribe Now
            </div>
          </div>
          {/* hero right */}
          <div className="relative flex-1">
            <img className="absolute z-10 left-0 bottom-0 w-32 " src={boxes} />
            <img className="absolute z-10 right-0 bottom-0 w-64 " src={hero} />
            <img className="absolute left-0.top-0 w-56" src={balloon} />
          </div>
        </div>

        {/* Input section */}
        <div className="flex w-full bg-gray-300 pb-32 pt-12">
          <form action="" className="flex items-end mx-auto">
            <Combo />
            <div>
              <button
                className="border-2 border-gray-500 text-gray-500 px-12 rounded-full hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* HOW IT WORKS SECTION */}
        <div className="pt-12">
          <div className="mx-auto text-4xl font-bold text-gray-700 text-center mb-2">
            How it works
          </div>
          <div className="text-center text-2xl font-normal text-gray-500 mb-20">
            Your weekly subscription buys books & DVDs from local charity shops
          </div>

          <div className="mx-auto justify-around w-4/5">
            <div className="flex items-stretch py-4 px-3 mb-12">
              <div className="w-3/4">
                <img className="w-full mr-32" src={wish} />
              </div>
              <div className="ml-8 flex-initial">
                <div className="text-xl font-semibold text-gray-500">
                  Step 1
                </div>
                <div className="text-3xl font-bold text-gray-700 leading-snug">
                  Start by telling us the things you like to read and watch
                </div>
              </div>
            </div>

            <div className="flex py-4 px-3 mb-12">
              <div className="flex-1">
                <div className="text-xl font-semibold text-gray-500">
                  Step 2
                </div>
                <div className="text-3xl font-bold text-gray-700 leading-snug">
                  We buy the items from your local charity shops and drop the
                  box at your door.
                </div>
              </div>
              <div className="w-1/2">
                <img className="w-64 ml-32" src={deliver} />
              </div>
            </div>

            <div className="flex py-4 px-3 mb-12">
              <div className="w-1/2">
                <img className="w-full mr-16" src={enjoy} />
              </div>
              <div className="flex-1">
                <div className="text-xl font-semibold text-gray-500">
                  Step 3
                </div>
                <div className="text-3xl font-bold text-gray-700 leading-snug">
                  Enjoy your favorites books, CDs, DVDs, and games without
                  leaving the house.
                </div>
              </div>
            </div>
          </div>

          {/* mission section */}
          <div className="py-20 bg-gray-300">
            <div className="max-w-screen-lg mx-auto text-4xl font-bold text-gray-700 mb-2 px-12">
              <span className="text-gray-500 text-xl font-semibold block">
                Who are we and why we do it
              </span>
                Placeholder for Our Mission
                <span className="block text-lg font-normal mt-8 text-gray-700">
                Probabo, inquit, modo dixi, constituto, ut alterum aspernandum sentiamus alii autem, quibus ego cum a se esse appetendum, alterum esse admonere interesse enim ipsam per se esse albam, dulce mel quorum nihil molestiae consequatur, vel illum, qui dolorem aspernari ut ita ruant itaque earum motus.
                </span>
            </div>
          </div>


          {/* CTA */}
          <div className="py-12 bg-red-700 ">
            <div className="flex items-center max-w-screen-lg mx-auto px-12 ">
              <div className="flex-1 text-3xl font-semibold tracking-wide text-white mb-2">
                  Placeholder for CTA
              </div>
              <button className="text-lg font-semibold py-4 px-20 rounded-full text-white border-2 border-white">
                Get in touch
              </button>

            </div>

          </div>

          <div className="bg-gray-800 py-20 pt-12">
            <div className="flex justify-around max-w-screen-xl mx-auto">
              <div className="flex-1 text-sm text-gray-500 my-2">
                Footer Link 1
              </div>
              <div className="flex-1 text-sm text-gray-500 my-2">
                Footer Link 1
              </div>
              <div className="flex-1 text-sm text-gray-500 my-2">
                Footer Link 1
              </div>
              <div className="flex-1 text-sm text-gray-500 my-2">
                Footer Link 1
              </div>
            </div>
          </div>

        </div>



      </div>
    </div>
  );
}

export default App;
