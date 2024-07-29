import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="mt-12 text-center text-white">
      <h1 className='text-4xl'>Testimonials</h1>
      <p className="flex items-center justify-center space-x-2 text-2xl">
        <FaQuoteLeft className="text-blue-500" /> {/* Quotation icon */}
        <span>
          Our client say about our Services
        </span>
        <FaQuoteRight className="text-blue-500"  />
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 ">
        <div className="p-4 rounded-lg">
          <img
            className="w-32 h-32  mx-auto rounded-full"
            src="https://t4.ftcdn.net/jpg/06/23/76/57/360_F_623765727_4BWcywznDxjkc5HMSF4kKZXIriEsMxyL.jpg"
            alt="Client 1"
          />
          <p className="mt-4"> message.</p>
        </div>
        <div className="p-4  rounded-lg">
          <img
            className="w-32 h-32 mx-auto rounded-full"
            src="https://t4.ftcdn.net/jpg/06/23/76/57/360_F_623765727_4BWcywznDxjkc5HMSF4kKZXIriEsMxyL.jpg"
            alt="Client 2"
          />
          <p className="mt-4"> message.</p>
        </div>
        <div className="p-4 rounded-lg">
          <img
            className="w-32 h-32 mx-auto rounded-full"
            src="https://t4.ftcdn.net/jpg/06/23/76/57/360_F_623765727_4BWcywznDxjkc5HMSF4kKZXIriEsMxyL.jpg"
            alt="Client 3"
          />
          <p className="mt-4"> message.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
