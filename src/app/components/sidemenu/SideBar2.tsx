import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MENU_LIST } from "./menu";

import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "./custom.scss";

export const SideBar2 = () => {
  return (
    <ProSidebar>
      <SidebarHeader>test</SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          {Object.keys(MENU_LIST).map((key) => {
            let secMenu = Object.keys((MENU_LIST as any)[key]);
            if (secMenu.includes("path")) {
              return (
                <MenuItem key={key}>
                  {key}
                  <Link to={(MENU_LIST as any)[key].path} />
                </MenuItem>
              );
            } else {
              return (
                <SubMenu key={key} title={key}>
                  {Object.keys((MENU_LIST as any)[key]).map((secKey) => {
                    return (
                      <MenuItem key={secKey}>
                        {secKey}
                        <Link to={(MENU_LIST as any)[key][secKey].path} />
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              );
            }
          })}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};
