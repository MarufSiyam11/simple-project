import React from "react";

const About = () => {
  return (
    <div>
      <div className="sm:flex items-center max-w-screen-xl mx-auto px-4">
        <div className="sm:w-1/2 p-10">
          <div className="text-center">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="About Our Company"
              className="object-center"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div>
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <p className="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse
                et magna quis elit efficitur consequat. Mauris eleifend velit a
                pretium iaculis. Donec sagittis velit et magna euismod, vel
                aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
                arcu volutpat vel.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
