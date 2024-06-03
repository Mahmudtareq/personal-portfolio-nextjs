import { Facebook, GitBranchPlus, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const UserCard = () => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-5 pt-4">
        <Image
          src="https://i.ibb.co/k4X14GX/JOBPIC.jpg"
          alt="profile image "
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          width={100}
          height={100}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Tareq Mahmud
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Front End Developer
        </span>
        <div className="flex mt-4 md:mt-6">
          <Button
            variant="customButton"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </Button>
          <Button
            variant="outline"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Message
          </Button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-4 py-3">
          <Button
            variant="outline"
            size="icon"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <Link href="#">
              <Facebook />
            </Link>
            <span className="sr-only">Icon description</span>
          </Button>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <Link
              href="https://www.linkedin.com/in/mahmudtareq/"
              target="_blank"
            >
              <Linkedin />
            </Link>
            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <Link href="https://github.com/Mahmudtareq" target="_blank">
              <GitBranchPlus />
            </Link>
            <span className="sr-only">Icon description</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
