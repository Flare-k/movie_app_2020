import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
/*
페이지가 새로고침 되는 것을 막기 위해 <a href=""><</a>가 아니라 link를 이용한다. 
Link는 Router 밖에서 쓸 수 없다. 따라서 App.js에서 <Navigation/>을 HashRotuer 밖에서 쓰면
Link를 사용할 수 없게 되는 것이다.

Link의 to는 to = "/about"처럼 표현할 수도 있고 객체 형태로도 표현 가능하다.
props의 경우 우리가 링크를 클릭하면 리액트 라우터는 /about으로 데려가고 컴포넌트 About이 되어야 한다. 뿐만 아니라 props도 보내주고 있다.
[중요]
!  Link를 통해 정보를 라우터로 보낼 수 있다  !
즉 원하는 컴포넌트에서 Link 태그로 원하는 정보를 가져온다음 라우터가 있는 App.js에서 그에 맞는 라우트를 작성해주면 정보를 원래 갖고 있던 페이지의 내용을 새로 만든 페이지로 가져올 수 있는 것이다.

*/
function Navigation() {
    return ( <
        div className = "nav" >
        <
        Link to = "/" > Home < /Link> <
        Link to = "/about" > About < /Link> < /
        div >
    );
}

export default Navigation;