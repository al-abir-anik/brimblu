import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "w-fit text-2xl text-shop-dark-green font-black tracking-wider uppercase hover:text-shop-green hoverEffect group font-sans",
          className,
        )}
      >
        Brim
        <span className="text-shop-green group-hover:text-shop-dark-green hoverEffect">
          Blu
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
