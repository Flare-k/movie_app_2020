import React from 'react';

/*
Movie�� ������ �����;� �ϱ� ������ Movie.js�� Link�� �ɾ���.

���� ��ȭ�� ���� Ŭ�� ���� �׳� /movie-detail�� �Է��ϸ� props-> location->state�� undefined�� �� ���̴�.
���� undefined ����� home���� Redirect�� ���̴�.
*/
class Detail extends React.Component {
    //props�� ���� ����ʹٸ� console.log(this.props) ���ָ� ��.
    //component�� �����Ǹ� ����
    //const { location } = this.props; props���� location�� �����´�.
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        //undefined ��츦 ���.. ���Ⱑ ���� ȣ��Ǳ� ������ �׶� location�� ����.
        if (location.state) {
            return <span> { location.state.title } </span>;
        } else {
            return null;
        }
    }
}

export default Detail;