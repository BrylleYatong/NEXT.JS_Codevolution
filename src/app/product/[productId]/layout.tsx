import React from 'react'

function Layout(props:{children:React.ReactNode}) {
    const {children} = props ?? {}

  return (
    <>
    {children}
    <h2>Features products</h2>
    {/* Carousel here */}
    </>
  )
}

export default Layout