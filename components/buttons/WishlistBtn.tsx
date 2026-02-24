import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";

const WishlistBtn = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
      <button
        className={`p-2.5 rounded-full bg-white hover:bg-shop-dark-green hover:text-white hoverEffect`}
      >
        <Heart size={15} />
      </button>
    </div>
  );
};

export default WishlistBtn;
