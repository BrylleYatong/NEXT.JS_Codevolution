import React from 'react'
import { notFound } from 'next/navigation'

function getRandomInt(count:number) {
  return Math.floor(Math.random() * count);
}

function ReviewDetail(props:{params:{productId:string,reviewId:string}}) {
    const {productId,reviewId} = props.params ?? {}

    const random = getRandomInt(2);
    if(random === 1){
      throw new Error("Error loading review");
    }

    if(parseInt(reviewId) > 1000){
      return notFound();
    }

  return (
    <div>
        <h1>Review {reviewId} for product {productId}</h1>
    </div>
  )
}

export default ReviewDetail