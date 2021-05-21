import React from 'react';

/*
Movie의 내용을 가져와야 하기 때문에 Movie.js에 Link를 걸었다.

만약 영화에 대한 클릭 없이 그냥 /movie-detail을 입력하면 props-> location->state는 undefined가 될 것이다.
만약 undefined 경우라면 home으로 Redirect할 것이다.
*/
class Detail extends React.Component {
    //props에 대해 보고싶다면 console.log(this.props) 해주면 됨.
    //component가 생성되면 수행
    //const { location } = this.props; props에서 location을 가져온다.
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        //undefined 경우를 대비.. 여기가 먼저 호출되기 때문에 그땐 location이 없다.
        if (location.state) {
            return <span> { location.state.title } </span>;
        } else {
            return null;
        }
    }
}

export default Detail;