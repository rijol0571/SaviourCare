import React from "react";
import search from "../svg/search.svg";
import phormathy from "../svg/phormathy.svg";
import Consultation from "../svg/Consultation.svg";
import Details from "../svg/Details.svg";
import Emergency from "../svg/Emergency.svg";
import Tracking from "../svg/Tracking.svg";

const Offers = () => {
  return (
    <div className="container mx-auto py-16 px-8">
    
      <div className="texts text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 pb-10">Services we Offer</h1>
        <p className="text-gray-600 text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br />
          Aenean massa.
        </p>
      </div>


      <div className="boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
        <div className="box bg-white shadow-md p-6 text-center rounded-lg">
          <img src={search} alt="Online pharmacy" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Search doctor</h3>
          <p className="text-gray-600">
            Choose your doctor from thousands <br /> of specialist, general, and trusted <br /> hospitals.
          </p>
        </div>


        <div className="box bg-white shadow-md p-6 text-center rounded-lg">
          <img src={Consultation} alt="Consultation" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Consultation</h3>
          <p className="text-gray-600">
            Choose your doctor from thousands <br /> of specialist, general, and trusted <br /> hospitals.
          </p>
        </div>


        <div className="box bg-white shadow-md p-6 text-center rounded-lg">
          <img src={Details} alt="Details info" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Details info</h3>
          <p className="text-gray-600">
            Choose your doctor from thousands <br /> of specialist, general, and trusted <br /> hospitals.
          </p>
        </div>
      </div>


      <div className="boxes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="box bg-white shadow-md p-6 text-center rounded-lg">
          <img src={Emergency} alt="Emergency care" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency care</h3>
          <p className="text-gray-600">
            Choose your doctor from thousands <br /> of specialist, general, and trusted <br /> hospitals.
          </p>
        </div>


        <div className="box bg-white shadow-md p-6 text-center rounded-lg">
          <img src={Tracking} alt="Tracking" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tracking</h3>
          <p className="text-gray-600">
            Choose your doctor from thousands <br /> of specialist, general, and trusted <br /> hospitals.
          </p>
        </div>

        <div className="box bg-white shadow-md p-6 text-center rounded-lg">
          <img src={phormathy} alt="Pharmacy" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Online pharmacy</h3>
          <p className="text-gray-600">
            Choose your doctor from thousands <br /> of specialist, general, and trusted <br /> hospitals.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
  <button className="bg-transparent text-blue-600 font-semibold py-3 px-6 rounded-lg border-2 border-blue-600 transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:text-white focus:outline-none">
    Learn more
  </button>
</div>

    </div>

    
  );
  
};


export default Offers;
