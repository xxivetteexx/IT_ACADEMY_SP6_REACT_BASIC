import React from "react"

function Book(props)  {
    return (
        <div>
           <p>{props.title.text}</p>
        </div>
    )
}

export default Book