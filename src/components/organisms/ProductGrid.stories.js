import React from "react"
import ProductGrid from "./ProductGrid"
import CardPlaceholderImage from "stories/assets/card-placeholder.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid
}

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: CardPlaceholderImage, title: "Título 1", summary: "texto" },
      { id: 2, image: CardPlaceholderImage, title: "Título 2", summary: "texto" },
      { id: 3, image: CardPlaceholderImage, title: "Título 3", summary: "texto" },
      { id: 4, image: CardPlaceholderImage, title: "Título 4", summary: "texto" },
      { id: 5, image: CardPlaceholderImage, title: "Título 5", summary: "texto" },
      { id: 6, image: CardPlaceholderImage, title: "Título 6", summary: "texto" }
    ]}
  />
);
