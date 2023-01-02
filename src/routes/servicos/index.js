import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailPage from "components/pages/ProductDetail";

import { useScrollToTop } from "hooks/scroll";
import { useProduct } from "hooks/products";
import Error from "components/pages/Error";
import SvgQuestion from "drawings/Question";

const ProductDetail = () => {
  useScrollToTop();

  const { slang } = useParams();

  const product = useProduct({ slang });

  if (!product) {
    return <Error title="Serviço não encontrado" description="Serviço não encontrado ou não disponível"
      image={<SvgQuestion />} />
  }

  return <ProductDetailPage product={product} />;
}

export default ProductDetail;
