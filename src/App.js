import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";
import Navigation from "./components/Navigation";
/*
HashRouter, Route를 import한다.  (라우터는 명령을 받고 실행해주는 역할이고, 라우트는 경로와 그에맞는 컴포넌트를 라우터에게 명령을 내리는 역할이다.)
BrowerRouter도 있는데 깃허브 페이지에 설정하기엔 HashRouter가 더 편하다.
react-router-dom은 다양한 종류의 라우터들을 가지고 있다.

HashRouter를 리턴하도록 한다. 그리고 그 안에 Route를 넣어준다.
Route 안에는 중요한 props가 들어간다. 하나는 Rendering할 스크린이 들어가고 
다른 하나는 뭘 할지 정해주는 역할을 한다.

path로 들어가서 그 안의 내용은 component로 전달해준다.

React router는 기본적으로 url을 가져온고 그 다음 비교한다.
만약 /home, /home/introduction이 있는데 /home/introduction을 이용하면 
/home, /home/introduction 둘다 화면으로 가져오는 것이다.
이것을 해결하기 위해 exact = {true}를 사용한다.

하지만 어떻게 두 라우터간에 네이게이트를 할까?
네이게이션은 모든 페이지에 나오도록 할 것이다. 
해당 링크를 누르면 페이지 전체가 새로고침 되버린다. html은 새로운 페이지를 갈 떄마다 새로고침을 하기 때문이다.
리액트가 죽고 새 페이지가 새로고침 되는 것이다. 하지만 우리는 이런 것을 원하지 않는다. 
인터랙션을 원하지만 그렇다고 페이지를 강제로 새로고침하고 리액트를 죽이는 것은 원하지 않는다.

*/
function App() {
    return ( <
        HashRouter >
        <
        Navigation / >
        <
        Route path = "/"
        exact = { true }
        component = { Home }
        />{" "} <
        Route path = "/about"
        component = { About }
        />{" "} <
        Route path = "/movie/:id"
        component = { Detail }
        />{" "} <
        /HashRouter>
    );
}

export default App;