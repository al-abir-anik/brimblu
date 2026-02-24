import Link from "next/link";
import Title from "../ui/title";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Category } from "@/sanity.types";

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="my-10 md:my-20 p-5 lg:p-7 bg-white border border-shop-light-green/20 rounded-md">
      <Title className="border-b pb-3">Popular Categories</Title>
      <div className="">
        {categories?.map((category) => (
          <div
            key={category?._id}
            className="group p-5 flex items-center gap-3 bg-shop-light-bg"
          >
            {category?.image && (
              <div className="w-20 h-20 p-1 border border-shop-orange/30 hover:border-shop-orange hoverEffect overflow-hidden">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                    src={urlFor(category?.image).url()}
                    alt="category-image"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                  />
                </Link>
              </div>
            )}
            <p>{category?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
