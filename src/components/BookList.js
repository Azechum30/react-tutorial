import { books } from "./books";
import { Book } from "./Book";

export const BookList = () => {
	const getBook = (id) => {
		const book = books.find((book) => book.id === id);
		alert(book?.title);
	};
	return (
		<section
			className='book-list-container'
			style={{ color: "#222" }}>
			<h1 className='title'>amazon best sellers books</h1>
			<div className='book-list'>
				{books.map((book, index) => (
					<Book
						{...book}
						getBook={getBook}
						key={book.id}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};
