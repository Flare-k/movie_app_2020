import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

// setState�� ������� ������ �� state�� �Բ� render function�� ȣ����� �ʴ´�.
class Home extends React.Component {
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
        ); //--> movies�� console.log�� Ȯ���ϸ� �̷��� �����̴�. �̷��� �ᵵ �ȴ�.
        // == const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating',)
        //async, await�� �ϴ� ������ �⺻������ javascript����
        //getMovies�Լ��� ���� �ð��� �ʿ��ϰ� �װ� ��ٷ��� �Ѵٴ� ���� �˷��ֱ� ���ؼ� �̴�.
        this.setState({ movies, isLoading: false }); //axios���� �޾ƿ� ������ state�� �־��ش�.
    };

    componentDidMount() {
        this.getMovies();
    }
    render() {
        const { isLoading, movies } = this.state;
        return ( 
            <section className = "container" > { ' ' } 
                {isLoading ? 
                    (
                        <div className = "loader" >
                            <span className = "loader__text" > Loading.. </span>{' '} 
                        </div>
                    ) 
                :
                    (
                        <div className = "movies" > { ' ' } 
                            {movies.map((movie) => (
                                        //���� Movie�� rendeing �Ѵ�.
                                <Movie 
                                    key = { movie.id }
                                    id = { movie.id }
                                    year = { movie.year }
                                    title = { movie.title }
                                    summary = { movie.summary }
                                    poster = { movie.medium_cover_image }
                                    genres = { movie.genres }
                                />))
                            } { ' ' } 
                        </div>
                    )
                } { ' ' } 
            </section>
        );
    }
}

export default Home;