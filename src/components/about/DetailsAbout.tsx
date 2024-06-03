import React from "react";

const DetailsAbout = () => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="flex flex-col">
        <h1 className="text-[28px] font-[700] leading-6 mb-3">Hello,</h1>
        <h2 className="text-[22px] font-[700] leading-6">
          I’m Tareq Mahmud a Passionate Front End Developer !
        </h2>
        <p className="text-[16px] leading-6  mt-8 mb-3 text-justify">
          I am an experienced Frontend Developer with over a 2 Years of
          professional expertise in the field. Throughout my career, I have had
          the privilege of collaborating with prestigious organizations,
          contributing to their success and growth.
        </p>
        <p className="text-[16px] leading-6 mb-3 text-justify">
          My passion for frontend development is not only reflected in my
          extensive experience but also in the enthusiasm and dedication I bring
          to each project
        </p>
      </div>
    </div>
  );
};

export default DetailsAbout;
