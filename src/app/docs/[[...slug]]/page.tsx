import React from 'react'

function Docs( props:{ params:{ slug:string[] } } ) {
    const {slug} = props.params ?? {}
    console.log("%c 🇦🇹: Docs -> slug ", "font-size:16px;background-color:#10d74d;color:white;", slug)

    if(slug?.length === 2) {
        return (
            <div>
                <h1>Viewing docs for feature {slug[0]} and concept {slug[1]}</h1>
            </div>
        )
    } else if(slug?.length === 1) {
        return (
            <div>
                <h1>Viewing docs for feature {slug[0]}</h1>
            </div>
        )
    }

  return (
    <div>Docs Page</div>
  )
}

export default Docs
