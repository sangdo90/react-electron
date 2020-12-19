import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { MENU_LIST2 } from "./menu";

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './custom.scss';

export const SideBar2 = () => {

    Object.keys(MENU_LIST2).map(key => {
        let secMenu = Object.keys((MENU_LIST2 as any)[key]);
        if (secMenu.includes("path")) {
            console.log('depth1')
            console.log(key);
            console.log((MENU_LIST2 as any)[key].path);
        } else {
            console.log('depth2')
            console.log(key);
            Object.keys((MENU_LIST2 as any)[key]).map(secKey => {
                console.log(secKey)
                console.log((MENU_LIST2 as any)[key][secKey].path)
            })
        }
    })


    return (

        <ProSidebar  >
            <SidebarHeader>
                MadApp
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    {
                        Object.keys(MENU_LIST2).map(key => {
                            let secMenu = Object.keys((MENU_LIST2 as any)[key]);
                            if (secMenu.includes("path")) {
                                return (
                                    <MenuItem key={key}>{key}
                                        <Link to={(MENU_LIST2 as any)[key].path} />
                                    </MenuItem>
                                )
                            } else {
                                return (
                                    <SubMenu key={key} title={key}>
                                        {Object.keys((MENU_LIST2 as any)[key]).map(secKey => {
                                            return (
                                                <MenuItem key={secKey}>
                                                    {secKey}
                                                    <Link to={(MENU_LIST2 as any)[key][secKey].path} />
                                                </MenuItem>
                                            )
                                        })}
                                    </SubMenu>
                                )
                            }
                        })
                    }
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};
