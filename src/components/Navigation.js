import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
/*
페이지가 새로고침 되는 것을 막기 위해 <a href=""><</a>가 아니라 link를 이용한다. 
Link는 Router 밖에서 쓸 수 없다. 따라서 App.js에서 <Navigation/>을 HashRotuer 밖에서 쓰면
Link를 사용할 수 없게 되는 것이다.
*/
function Navigation() {
    return ( <
        div className = "nav" >
        <
        Link to = "/" > Home < /Link> <
        Link to = "/about" > About < /Link> <
        /div >
    );
}

export default Navigation;