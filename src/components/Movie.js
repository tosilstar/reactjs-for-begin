import PropsTypes from 'prop-types'
import React from "react";
import { Link, useNavigate  } from 'react-router-dom';

function Movie({id, title, image, summary, genres}) {

    const navigate  = useNavigate();
    const onClick  = () => {
        navigate(`/detail/${id}`);   
    }

    return (
        <li id={id}>
            <Link to={`/detail/${id}`}><h2>{title}</h2></Link>
            <img src={image} title={title} onClick={onClick}/>
            <p>{summary}</p>
            <ul>
            {genres.map((j) => ( <li>{j}</li>))}
            </ul>
        </li>
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



