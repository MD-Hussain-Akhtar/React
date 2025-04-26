import React from 'react'

export default function About() {
  return (
      <div className="bg-white py-16">
          <div className="m-auto px-6 md:px-12 xl:px-6 text-gray-600 container">
              <div className="md:flex lg:items-center md:gap-6 lg:gap-12 space-y-6 md:space-y-0">
                  <div className="lg:w-5/12 md:5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="lg:w-6/12 md:7/12">
                      <h2 className="font-bold text-gray-900 text-2xl md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}