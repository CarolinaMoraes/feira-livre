import { useProduct, useProducts } from "./products";

describe('useProduct()', () => {
  test("returns a product", () => {
    const slang = "cozinha-solidaria";
    const product = useProduct({ slang });

    expect(product.title).toEqual("Cozinha solidária");
  });

  test("return undefined if the product wasn't found", () => {
    const slang = "invalid-slang";
    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe('useProducts()', () => {
  test("returns a product list", () => {
    const products = useProducts();

    expect(products.length).toBeGreaterThan(1);
  });
});
