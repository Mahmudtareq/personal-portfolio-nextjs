/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactFrom from "./ContactFrom";
import {
  LocateFixed,
  Mail,
  MapPin,
  MessageCircleCode,
  Phone,
} from "lucide-react";

const Form = () => {
  return (
    <div className="max-w-[1140px] mx-auto lg:flex lg:items-start lg:justify-between my-8 p-4">
      <div className="w-full lg:w-1/2 me-0 lg:me-5 mb-4 lg:mb-0">
        <h1 className=" text-[#DF8908] text-[36px] leading-1">Let's talk</h1>
        <p className="text-pretty text-justify">
          I'm currently avaliable to take on new projects, so feel free to send
          me a message about anything that you want me to work on. You can
          contact anytime.
        </p>
        <div className="my-5">
          <div className=" flex items-center gap-3 mb-3">
            <Mail /> <span className="text-[#DF8908]">tareqlpu5@gmail.com</span>
          </div>
          <div className=" flex items-center gap-3 mb-3">
            <Phone /> <span className="text-[#DF8908]">+88 01831874069</span>
          </div>
          <div className=" flex items-center gap-3 mb-3">
            <MapPin />
            <span className="text-[#DF8908]">Dhaka, Mirpur</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 ms-0 lg:ms-5">
        <ContactFrom />
      </div>
    </div>
  );
};

export default Form;
