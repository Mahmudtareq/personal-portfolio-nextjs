import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Subscribe = () => {
  return (
    <div className="p-4 md:flex md:items-center md:justify-between">
      <div className=" max-w-md max-auto mb-3 md:mb-0">
        <h1 className="text-[32px] my-1">Tareq Mahmud</h1>
        <p className="text-justify">
          I am a frontend developer from, Bangladesh with 1.5 years of
          experience in companies like Global Travel & Toures
        </p>
      </div>
      <div>
        <div className="flex w-full items-center space-x-3">
          <Input
            type="email"
            className="block w-full py-5 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
          />
          <Button variant="customButton" type="submit" className="py-5">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
