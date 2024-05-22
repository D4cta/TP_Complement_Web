import { useState } from 'react'
import BookItem from './BookItem'

export type Book = {
    titre : string,
    auteur : string,
    date : string
}

export function BookList() {

    const [books, setBooks] = useState<Book[]>(
        [
            {
            "titre": "Le Petit Prince",
            "auteur": "Antoine de Saint-Exupéry",
            "date": "1943-04-06T00:00:00Z"
            },
            {
            "titre": "1984",
            "auteur": "George Orwell",
            "date": "1949-06-08T00:00:00Z"
            },
            {
            "titre": "Harry Potter à l'école des sorciers",
            "auteur": "J.K. Rowling",
            "date": "1997-06-26T00:00:00Z"
            },
            {
            "titre": "Orgueil et Préjugés",
            "auteur": "Jane Austen",
            "date": "1813-01-28T00:00:00Z"
            },
            {
            "titre": "Le Seigneur des anneaux : La Communauté de l'anneau",
            "auteur": "J.R.R. Tolkien",
            "date": "1954-07-29T00:00:00Z"
            }
        ]
    )

    const onClick = (element : number) => {
        const test = 
        books.splice(element, 1)
        setBooks(books)
    };

    return <div>

    {books.map(function (book, index) {
      return <div key={index}>
        <BookItem book={book} onClick={()=>(onClick(index))}/>
        </div>
    })}

    </div>

}

export default BookList