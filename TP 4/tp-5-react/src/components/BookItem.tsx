
import {Book} from './Booklist'

type Props = {
    book : Book,
    onClick : () => void

}

export function BookItem({book, onClick} : Props) {

    return <div>

    <p>
    Titre du livre : {book.titre} <br/>
    L'auteur : {book.auteur} <br/>
    Date de parution : {book.date} <br/>
    </p>

    <button onClick={onClick}>
		Supprimer le livre
	</button>

    </div>

}

export default BookItem