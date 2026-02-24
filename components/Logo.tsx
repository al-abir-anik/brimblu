import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "w-fit text-2xl text-shop-dark-green font-black tracking-wider hover:text-shop-green hoverEffect group",
          className,
        )}
      >
        Bongo
        <span className="text-shop-green group-hover:text-shop-dark-green hoverEffect">
          Bazar
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
