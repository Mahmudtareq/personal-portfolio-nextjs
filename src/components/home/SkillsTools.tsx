import { ScrollArea } from "../ui/scroll-area";

const SkillsTools = () => {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4">
      <div>
        <h1 className="text-lg text-[#34d399]">Skills & Tools</h1>
      </div>
      <ScrollArea className="h-[282px] p-3">
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            HTML&CSS
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            Javascript
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            React Js
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            Next Js
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            Taliwind CSS
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            Next Auth
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            Express Js
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "55%" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 text-base font-medium dark:text-white">
            mongoDB
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 h-2 rounded-full dark:bg-gray-300"
              style={{ width: "55%" }}
            ></div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default SkillsTools;
