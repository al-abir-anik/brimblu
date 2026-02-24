"use client";

import { Product } from "@/sanity.types";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  className: string;
}

const AddToCartBtn = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  const handleAddtoCart = () => {

  };

  return (
    <div>
      <Button
        onClick={handleAddtoCart}
        disabled={isOutOfStock}
        className={cn(
          "w-full bg-shop-dark-green/80 text-shop-light-bg shadow-none border border-shop-dark-green/80 font-semibold tracking-wide text-white hover:bg-shop-dark-green hover:border-shop-dark-green hoverEffect",
          className,
        )}
      >
        <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartBtn;
