import { productType } from "@/constants/data";
import Link from "next/link";

interface Props {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const HomeTab = ({ selectedTab, setSelectedTab }: Props) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            onClick={() => setSelectedTab(item?.title)}
            key={item?.title}
            className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-shop-light-green/30 hover:border-shop-light-green hover:bg-shop-light-green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop-light-green text-white border-shop-light-green" : "bg-shop-light-green/20"}`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className="px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-shop-light-green/30 hover:border-shop-light-green hover:bg-shop-light-green hover:text-white hoverEffect"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTab;
