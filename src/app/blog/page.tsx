import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { 
  title: {
    absolute: 'Blog',
  }
}

function Blog() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Blog Page</h1>
    </div>
  )
}

export default Blog