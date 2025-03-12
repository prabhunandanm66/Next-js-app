import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
    </div>
  );
};

export default Product;
