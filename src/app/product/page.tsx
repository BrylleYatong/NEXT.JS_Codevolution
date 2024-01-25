import React from 'react'
import Link from 'next/link'

function ProductList() {
  const productId = 4

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Product List Page</h1>
      <h2>
        <Link href='/product/1'><h3>Product 1</h3></Link>
      </h2>
      <h2>
        <Link href='/product/2'><h3>Product 2</h3></Link>
      </h2>
      <h2>
        <Link href='/product/3' replace><h3>Product 3</h3></Link>
      </h2>
      <h2>
        <Link href={`product/${productId}`}><h3>Product {productId}</h3></Link>
      </h2>
    </div>
  )
}

export default ProductList