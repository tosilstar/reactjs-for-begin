import PropsTypes from 'prop-types'
import React from "react";
import { Link, useNavigate  } from 'react-router-dom';
import styles from "./Movie.module.css";


function Movie({id, title, image, summary, genres}) {

    const navigate  = useNavigate();
    const onClick  = () => {
        navigate(`/detail/${id}`);   
    }

    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={image} title={title} onClick={onClick}/>
            <div>
                <h2 className={styles.movie__title}><Link to={`/detail/${id}`}><h2>{title}</h2></Link></h2>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul className={styles.movie__genres}>
                {genres.map((j) => ( <li key={j}>{j}</li>))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id : PropsTypes.number.isRequired,
    title : PropsTypes.string.isRequired,
    img : PropsTypes.string.isRequired,
    summary : PropsTypes.string.isRequired,
    genres : PropsTypes.arrayOf(PropsTypes.string).isRequired
}
export default Movie;