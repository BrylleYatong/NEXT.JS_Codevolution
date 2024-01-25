"use client";
import React from 'react'

function ErrorBoundary({error}:{error:Error}) {
  return (
    <div>
        {/* <h1>Error in review Id</h1> */}
        <h1>{error.message}</h1>
    </div>
  )
}

export default ErrorBoundary