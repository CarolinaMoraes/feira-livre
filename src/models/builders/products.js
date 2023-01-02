import products from "./fixtures/products.json";
import ProductImage from "stories/assets/card-placeholder.jpg";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      ...products[i],
      image: ProductImage
    }
    )
  }

  return result;
};

export const buildProduct = () => buildProductList(1)[0];
