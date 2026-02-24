"use client";

import { Category } from "@/sanity.types";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div>
      Category Products <p></p>
    </div>
  );
};

export default CategoryProducts;
