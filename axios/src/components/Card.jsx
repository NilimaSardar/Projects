export const Card = ({movieData}) =>{
    const {Poster, imdbID} = movieData;
    return(
        <li>
            <div>
                <div>
                    <img src={Poster} alt={imdbID} />
                </div>
                <div>
                    <div>
                        <a href={`/movie/${imdbID}`}>
                            <button>Watch now</button>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    )
}