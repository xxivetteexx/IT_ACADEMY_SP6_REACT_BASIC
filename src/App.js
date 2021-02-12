import React from "react"
import Book from "./components/Book"
import booksData from "./booksData"

function App()  {
    const bookComponents = booksData.map(book => <Book key={book.id} title={book.title} author={book.author}/>)
    return (
        <div>
            {bookComponents}
        </div>
    )
}

export default App