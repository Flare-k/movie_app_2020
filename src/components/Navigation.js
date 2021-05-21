import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
/*
�������� ���ΰ�ħ �Ǵ� ���� ���� ���� <a href=""><</a>�� �ƴ϶� link�� �̿��Ѵ�. 
Link�� Router �ۿ��� �� �� ����. ���� App.js���� <Navigation/>�� HashRotuer �ۿ��� ����
Link�� ����� �� ���� �Ǵ� ���̴�.

Link�� to�� to = "/about"ó�� ǥ���� ���� �ְ� ��ü ���·ε� ǥ�� �����ϴ�.
props�� ��� �츮�� ��ũ�� Ŭ���ϸ� ����Ʈ ����ʹ� /about���� �������� ������Ʈ About�� �Ǿ�� �Ѵ�. �Ӹ� �ƴ϶� props�� �����ְ� �ִ�.
[�߿�]
!  Link�� ���� ������ ����ͷ� ���� �� �ִ�  !
�� ���ϴ� ������Ʈ���� Link �±׷� ���ϴ� ������ �����´��� ����Ͱ� �ִ� App.js���� �׿� �´� ���Ʈ�� �ۼ����ָ� ������ ���� ���� �ִ� �������� ������ ���� ���� �������� ������ �� �ִ� ���̴�.

*/

function Navigation() {
    return ( 
        <div className = "nav">
            <Link to = "/" > Home </Link> 
            <Link to = "/about" > About </Link> 
        </div>
    );
}

export default Navigation;