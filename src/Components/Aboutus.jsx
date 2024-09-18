import React from 'react';

const Aboutus = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="h-64 md:h-96 w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://medias.utsavfashion.com/media/wysiwyg/home/2024/1205/southern-saree.jpg"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
              </p>
              <a
                href="#"
                className="inline-block bg-white-500 text-black border-2 border-blue-500 px-6 py-2 rounded-full shadow hover:bg-blue-600 transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
