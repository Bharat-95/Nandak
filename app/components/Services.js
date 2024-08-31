import React from "react";

const Services = () => {
  return (
    <div className=" space-y-4">
      <div className="text-4xl font-extrabold underline">Services</div>
      <div className="lg:text-lg md:text-lg text-sm font-extralight leading-relaxed">
        We provide Web development and App development services to improve
        <br /> your buisness and grow your Brand.
      </div>

      <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-4 ">
        <div className="p-10 space-y-4 shadow-lg hover:bg-gradient-to-tr from-orange-400 to-orange-200 rounded-md my-10 cursor-pointer border-[1px] border-black hover:transform hover:-translate-y-4 duration-150">
          <div className="text-lg font-bold flex justify-center">
            Web Development
          </div>
          <div className="flex justify-center font-extralight">
            At Nandak Innovations, we specialize in crafting custom websites and
            web applications that meet your unique business needs. We offer
            end-to-end services that cover every aspect of web development. From
            front-end design to back-end integration.
          </div>
        </div>
        <div className="p-10 space-y-4 shadow-lg hover:bg-gradient-to-tr from-orange-400 to-orange-200 rounded-md my-10 cursor-pointer border-[1px] border-black  hover:transform hover:-translate-y-4 duration-150">
          <div className="text-lg font-bold flex justify-center">
            UI/UX Design
          </div>
          <div className="flex justify-center font-extralight">
            At Nandak Innovations, we create engaging and intuitive digital
            experiences through exceptional UI/UX design. We prioritize
            user-centered design principles, ensuring that every interaction on
            your website or app is seamless and satisfying.
          </div>
        </div>
        <div className="p-10 space-y-4 shadow-lg hover:bg-gradient-to-tr from-orange-400 to-orange-200 rounded-md my-10 cursor-pointer border-[1px] border-black  hover:transform hover:-translate-y-4 duration-150">
          <div className="text-lg font-bold flex justify-center">
            App Development
          </div>
          <div className="flex justify-center font-extralight">
            At nandak Innovations, we specialize in developing high-quality
            mobile applications that deliver exceptional user experiences. We build
            apps for both iOS and Android platforms, ensuring broad reach and
            engagement.
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
