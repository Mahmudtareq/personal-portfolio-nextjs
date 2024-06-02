import Link from "next/link";

const Logo = () => {
    return (
      <>
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <Image
              src={logo}
              className="rounded-lg"
              alt="E-shop Logo"
              height={40}
              width={50}
            /> */}
         
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            T-AREQ
          </span>
        </Link>
      </>
    );
};

export default Logo;