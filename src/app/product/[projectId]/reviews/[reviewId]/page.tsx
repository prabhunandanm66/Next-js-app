import React from "react";
import { notFound } from "next/navigation";

const Review = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;

  if (reviewId === "1000") {
    notFound();
  }
  return (
    <div>
      Review id page {reviewId} for product {productId}
    </div>
  );
};

export default Review;
