import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MENU_LIST } from "./menu";

const Menu = styled.div`
height: 95%
//   min-height:800px;
  flex-basis: 220px;
// overflow: auto;
  background-color : #333333;
  background-position: bottom left;
  background-size: contain;
  background-repeat: no-repeat;
  border-right: 1px solid #dfe4ee;
  position: relative;
`;
const Navigation = styled.div`
    float: left;
    border: none;
    border: 0px;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    min-width: 250px;

& ul {
    height: 60px;
    list-style: none;
    margin: 0;
    padding: 0;
}

& li {
    width: 250px;
    padding: 0px;
}

& li.menu {
    border-bottom: 1px solid #dfe4ee;
    box-sizing: border-box;
}

& li a {
    color: #ffffff;
    display: block;
    font-weight: bold;
    line-height: 60px;
    text-indent: 25px;
    margin: 0px;
    padding: 0px 0px;
    text-decoration: none;
    transition: all 1s;
}

& li a:hover,
& ul li:hover a {
    color: #fff;
    background-color: #1F3247;
    text-decoration: none;
    font-weight: bold;
}

&>ul>li>a:hover {
    font-weight: bold;
}
`;

export const SideMenu = () => {
  MENU_LIST.map((data) => {
    console.log(data);
  });

  return (
    <Menu>
      <Navigation id="navigation">
        <ul>
          {MENU_LIST.map((data) => {
            return (
              <li key={data.path} className="menu">
                <NavLink exact to={data.path}>
                  {data.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Navigation>
    </Menu>
  );
};
