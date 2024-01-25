"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

function OrderProduct() {

    const router = useRouter();

    const handleClick = () => {
        console.log('Placing your order');
        router.push('/');
    }

    const handleClickBack = () => {
        router.back();
    }

  return (
    <>
        <h1>Order Product Page</h1>
        <button onClick={handleClick}>Place order</button>
        <div>
            <button onClick={handleClickBack}>Go Back</button>
        </div>
    </>
  )
}

export default OrderProduct