export const Book = (props) => {
	const { image, title, author, getBook, id, index } = props;
	return (
		<div className='book'>
			<img
				src={image}
				alt={title}
			/>
			<h2>{title}</h2>
			<h4>{author}</h4>
			<span className='index'>{`#${index + 1}`}</span>
			<button onClick={() => getBook(id)}>Get Book</button>
		</div>
	);
};
