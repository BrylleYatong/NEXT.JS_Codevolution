import React from 'react'

function AuthLayout( props:{children:React.ReactNode} ) {
    const {children} = props ?? {}

  return (
    <div>
        <h2>Inner Layout</h2>
        {children}
    </div>
  )
}

export default AuthLayout