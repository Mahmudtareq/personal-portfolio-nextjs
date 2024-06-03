/* eslint-disable react/no-unescaped-entities */
import { ChevronDownIcon } from "lucide-react";

const ContactFrom = () => {
  return (
    <div className=" bg-gray-200 dark:bg-gray-900 p-4 rounded">
      <form action="#" className="">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Name"
                className="block w-full rounded-md border-0 px-3.5 py-3.5 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Last Name"
                className="block w-full rounded-md border-0 px-3.5 py-3.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                placeholder="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-3.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email"
                className="block w-full rounded-md border-0 px-3.5 py-3.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="phone"
                placeholder="Phone Number"
                className="block w-full rounded-md border-0 px-3.5 py-3.5 dark:text-gray-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={3}
                placeholder="Message"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-3.5 py-3.5 text-center text-[16px] font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;
