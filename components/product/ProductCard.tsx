import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { FlameIcon } from "lucide-react";
import Image from "next/image";
import WishlistBtn from "../buttons/WishlistBtn";
import Title from "../ui/title";
import PriceView from "./PriceView";
import AddToCartBtn from "../buttons/AddToCartBtn";

const ProductCard = ({ product }: { product: Product }) => {
  console.log(product);

  return (
    <div className="text-sm border border-shop-dark-blue/20 rounded-md bg-white group ">
      {/* image */}
      <div className="relative group overflow-hidden bg-shop-light-bg">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="product image"
            loading="lazy"
            width={700}
            height={700}
            className={`w-full h-64 object-cover overflow-hidden  bg-shop-light-bg hoverEffect ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
          />
        )}
        {product?.status === "sale" && (
          <p className="px-2 absolute top-2 left-2 z-10 text-xs border border-shop-dark-color/50 rounded-full group-hover:border-shop-light-green hoverEffect">
            Sale!
          </p>
        )}
        {product?.status === "new" && (
          <p className="px-2 absolute top-2 left-2 z-10 text-xs border border-shop-dark-color/50 rounded-full group-hover:border-shop-light-green hoverEffect">
            New!
          </p>
        )}
        {product?.status === "hot" && (
          <span className="px-2 absolute top-2 left-2 z-10 text-xs border border-shop-orange/50 rounded-full group-hover:border-shop-orange hoverEffect">
            <FlameIcon
              size={18}
              fill="#fb6c08"
              className="text-shop-orange/50 group-hover:text-shop-orange hoverEffect"
            />
          </span>
        )}
        <WishlistBtn product={product} />
      </div>

      <div className="p-3 flex flex-col gap-2">
        <Title className="text-sm line-clamp-1">{product?.name}</Title>
        {product?.name && <p></p>}
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartBtn product={product} className="w-36 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCard;
