import React from 'react';
import mainimg from '../svg/last.svg';

const Last = () => {
  return (
    <div className="container mx-auto flex flex-row-reverse items-center justify-between py-20 px-10 space-x-8">
      
      {/* Text side */}
      <div className="text_side max-w-lg">
        <h1 className="text-4xl font-bold leading-tight text-gray-800">
          Virtual healthcare Saviour <br /> for you
        </h1>
        <p className="text-lg text-blue-600 mt-10">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean commodo ligula eget dolor. Aenean massa.
        </p>
        <button className="mt-12 bg-blue-600 text-white py-4 px-8 rounded-[40px] hover:bg-blue-700">
          Consult today
        </button>
      </div>

      {/* Image side */}
      <div className="img_side">
        <img src={mainimg} alt="IMG" className="max-w-full h-auto" />
      </div>
      
    </div>
  );
};

export default Last;
