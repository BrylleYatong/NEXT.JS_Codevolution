import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

type Props = {
  params: {
    productId: string
  }
}

export const generateMetadata = ( {params}: Props ) : Metadata => {
  return {
    title: `Product ${params.productId}`,
  }
}

// function ProductDetails(props:{params:{productId:string}}){
  function ProductDetails( { params }:Props){
    const {productId} = params ?? {}

  return (
    <div>
        <Link href="/product">Product Page</Link>
        <Link href="/order-product">Order Product Page</Link>
        <h1>Details about the product {productId}</h1>
    </div>
  )
}

export default ProductDetails