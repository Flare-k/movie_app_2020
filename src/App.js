import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import "./App.css";
import Navigation from "./components/Navigation";
/*
HashRouter, Route�� import�Ѵ�.  (����ʹ� ����� �ް� �������ִ� �����̰�, ���Ʈ�� ��ο� �׿��´� ������Ʈ�� ����Ϳ��� ����� ������ �����̴�.)
BrowerRouter�� �ִµ� ����� �������� �����ϱ⿣ HashRouter�� �� ���ϴ�.
react-router-dom�� �پ��� ������ ����͵��� ������ �ִ�.

HashRouter�� �����ϵ��� �Ѵ�. �׸��� �� �ȿ� Route�� �־��ش�.
Route �ȿ��� �߿��� props�� ����. �ϳ��� Rendering�� ��ũ���� ���� 
�ٸ� �ϳ��� �� ���� �����ִ� ������ �Ѵ�.

path�� ���� �� ���� ������ component�� �������ش�.

React router�� �⺻������ url�� �����°� �� ���� ���Ѵ�.
���� /home, /home/introduction�� �ִµ� /home/introduction�� �̿��ϸ� 
/home, /home/introduction �Ѵ� ȭ������ �������� ���̴�.
�̰��� �ذ��ϱ� ���� exact = {true}�� ����Ѵ�.

������ ��� �� ����Ͱ��� ���̰���Ʈ�� �ұ�?
���̰��̼��� ��� �������� �������� �� ���̴�. 
�ش� ��ũ�� ������ ������ ��ü�� ���ΰ�ħ �ǹ�����. html�� ���ο� �������� �� ������ ���ΰ�ħ�� �ϱ� �����̴�.
����Ʈ�� �װ� �� �������� ���ΰ�ħ �Ǵ� ���̴�. ������ �츮�� �̷� ���� ������ �ʴ´�. 
���ͷ����� �������� �׷��ٰ� �������� ������ ���ΰ�ħ�ϰ� ����Ʈ�� ���̴� ���� ������ �ʴ´�.
*/
function App() {
    return ( 
        <HashRouter>
            <Navigation/>
            <Route path = "/" exact = { true } component = { Home }/>{" "} 
            <Route path = "/about" component = { About }/>{" "} 
            <Route path = "/movie/:id" component = { Detail }/>{" "} 
        </HashRouter>
    );
}

export default App;