import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { productType } from "./ProductType";
import { brandType } from "./BrandType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, productType, brandType],
};
