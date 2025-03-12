import React from "react";

const Product1 = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return <div>Product id page {productId}</div>;
};

export default Product1;
