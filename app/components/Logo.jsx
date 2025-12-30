import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="./logo.svg"
          alt="Protocol"
          className="h-6 w-auto"
          height={100}
          width={24}
        />
      </Link>
    </div>
  );
};
