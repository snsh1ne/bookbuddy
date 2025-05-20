import { Link } from "react-router-dom";

function SingleBook({ favoriteBook, setFavoriteBook }) {
    return (
        <>
            <h2>{favoriteBook?.title}</h2>
            <p>Author: {favoriteBook?.author}</p>
            <p>Description: {favoriteBook?.description}</p>
            <Link to="/">Back To Home</Link>
            <button onClick={() => setFavoriteBook(null)}>Remove Favorite</button>
        </>
    );
}

export default SingleBook;