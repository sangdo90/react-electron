import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { CreatedWebpack, CRA, Redux, Recoil, Chapter3 } from "../pages";
import { MENU_LIST } from "../components/sidemenu/menu";

const Routes = () => {
    const [menu, setMenu] = useState<any[]>([]);
    useEffect(() => {
        init();
    }, []);

    console.log(MENU_LIST["Install"].CRA)

    const init = () => {
        let tmpMenu: any[] = [];
        Object.keys(MENU_LIST).map((key) => {
            let secMenu = Object.keys((MENU_LIST as any)[key]);
            if (secMenu.includes("path")) {
                tmpMenu.push((MENU_LIST as any)[key]);
            } else {
                Object.keys((MENU_LIST as any)[key]).map((secKey) => {
                    tmpMenu.push((MENU_LIST as any)[key][secKey]);
                });
            }
        });
        console.log(MENU_LIST)
        console.log(tmpMenu)
        setMenu(tmpMenu);
    };

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={CRA} />
                <Route exact path="/CRA" component={CRA} />
                <Route exact path="/webpack" component={CreatedWebpack} />
                <Route exact path="/redux" component={Redux} />
                <Route exact path="/recoil" component={Recoil} />
                <Route exact path="/chapter3" component={Chapter3} />
                {/* {menu.map((data, i) => {
                    const { component: Component, ...rest } = data;
                    console.log(data)
                    return (
                        <Route
                            key={data + i.toString()}
                            exact
                            {...rest}
                            render={(routeProps) => <Component {...routeProps} />}
                        />
                    );
                })} */}
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    );
};

export default Routes;