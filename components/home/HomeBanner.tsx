import Link from "next/link";
import Title from "../ui/title";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 px-10 lg:px-24 flex items-center justify-between bg-shop-light-pink rounded-lg">
      {/* left */}
      <div className="space-y-5">
        <Title>
          Grab upto 50% off on <br />
          Winter Products
        </Title>
        <Link
          href={"/shop"}
          className="px-5 py-2 text-sm font-semibold text-white bg-shop-btn-dark-green rounded-md hover:opacity-90 hoverEffect"
        >
          Shop Now
        </Link>
      </div>

      {/* right */}
      <div>
        <Image
          src={banner_1}
          alt="banner"
          loading="eager"
          className="w-96 hidden md:inline-flex"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
