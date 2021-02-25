import React from "react"
import Book from "./components/Book"
// import booksData from "./booksData"
import data from "./data/data.json"

function App()  {
    const bookComponents = data.map(data => <Book key={data.id} title={data.title} author={data.author}/>)
    return (
        <div>
            {bookComponents}
        </div>
    )
}

export default App