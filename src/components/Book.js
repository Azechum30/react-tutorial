export const Book = (props) => {
	const { image, title, author, getBook, id } = props;
	return (
		<div className='book'>
			<img
				src={image}
				alt={title}
			/>
			<h2>{title}</h2>
			<h4>{author}</h4>
			<button onClick={() => getBook(id)}>Get Book</button>
		</div>
	);
};
