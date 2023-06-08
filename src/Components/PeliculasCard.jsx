import "./PeliculasCard.css"

export const PeliculasCard = ({peliculaProp}) => {

    const imgURL= `https://image.tmdb.org/t/p/w300${peliculaProp.poster_path}`

    return(
        <li className="movieCard">
            <div>{peliculaProp.title}</div>
            <img className="movieImage" src={imgURL} alt={peliculaProp.title} />
        </li>
    )
}