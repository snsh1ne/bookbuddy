import { useNavigate } from "react-router-dom";

function BookList({ books, setFavoriteBook }) {
    const navigate = useNavigate();

    const handleClick  = (book) => {
        setFavoriteBook(book);
        navigate("/favorite");
    };

    return (
        <>
            {books.map((book) => {
                const { title, author, id, description } = book;
                return (
                    <div key={id}>
                        <h2>{title}</h2>
                        <h3>{author}</h3>
                        <p>{description}</p>
                        <button onClick={() => handleClick(book)}>
                            Favorite
                        </button>
                    </div>
                );
            })}
        </>
    );
}

export default BookList;