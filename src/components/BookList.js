import { books } from "./books";
import { Book } from "./Book";

export const BookList = () => {
	const getBook = (id) => {
		const book = books.find((book) => book.id === id);
		alert(book?.title);
	};
	return (
		<section className='book-list'>
			{books.map((book) => (
				<Book
					{...book}
					getBook={getBook}
					key={book.id}
				/>
			))}
		</section>
	);
};
