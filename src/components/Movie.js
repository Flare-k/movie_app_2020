import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Movie.css';

//Movie Component는 state가 따로 필요하질 않아서 class로 구현할 필요없다.
//img 태그에서 alt와 title을 쓰는 이유는 poster에 마우스를 올리면 제목이 뜨게 된다.
function Movie({ id, year, title, summary, poster, genres }) {
    return ( <
        div className = "movie" >
        <
        Link to = {
            {
                pathname: `/movie/${id}`,
                state: {
                    year: year,
                    title: title,
                    summary: summary,
                    poster: poster,
                    genres: genres
                }
            }
        } >

        <
        img src = { poster }
        alt = { title }
        title = { title }
        /> <
        div className = "movie__data" >
        <
        h3 className = "movie__title" > { title } < /h3>  <
        h5 className = "movie__year" > { year } < /h5> <
        ul className = "movie__genres" > {
            genres.map((genre, index) => ( <
                li key = { index }
                className = "genres__genre" > { genre } < /li>
            ))
        } < /ul> <
        p className = "movie__summary" > { summary.slice(0, 140) }... < /p> < /
        div > <
        /Link> < /
        div >
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;