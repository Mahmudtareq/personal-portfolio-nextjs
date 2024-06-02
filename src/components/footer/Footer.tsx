import { Separator } from "../ui/separator";
import FooterLink from "./FooterLink";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg  m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-[1140px]">
        <Subscribe />
        <Separator className="h-[2px] bg-black dark:bg-white my-2"/>
        <FooterLink />
      </div>
    </footer>
  );
};

export default Footer;
