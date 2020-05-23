import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

// setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않는다.
class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    /*
    add = () => {
        this.setState((current) => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState({ count: this.state.count - 1 });
    };
*/
    getMovies = async() => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
        ); //--> movies를 console.log로 확인하면 이러한 형태이다. 이렇게 써도 된다.
        // == const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating',)
        //async, await을 하는 이유는 기본적으로 javascript에게
        //getMovies함수가 조금 시간이 필요하고 그걸 기다려야 한다는 것을 알려주기 위해서 이다.
        this.setState({ movies, isLoading: false }); //axios에서 받아온 내용을 state에 넣어준다.
    };

    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return ( <
            section className = "container" > { ' ' } {
                isLoading ? ( <
                    div className = "loader" >
                    <
                    span className = "loader__text" > Loading.. < /span>{' '} <
                    /div>
                ) : ( <
                    div className = "movies" > { ' ' } {
                        movies.map((movie) => (
                            //실제 Movie를 rendeing 한다.
                            <
                            Movie key = { movie.id }
                            id = { movie.id }
                            year = { movie.year }
                            title = { movie.title }
                            summary = { movie.summary }
                            poster = { movie.medium_cover_image }
                            genres = { movie.genres }
                            />
                        ))
                    } { ' ' } <
                    /div>
                )
            } { ' ' } <
            /section>
        );
    }
}

export default App;