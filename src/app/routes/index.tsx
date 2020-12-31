import React, { useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory, History } from "history";
import { MENU_LIST } from "../components/sidemenu/menu";
import { CRA, CreatedWebpack } from "../pages";

const history: History = createBrowserHistory();

const Routes = () => {
  const [menu, setMenu] = useState<any[]>([]);
  useEffect(() => {
    init();
  }, []);

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
    setMenu(tmpMenu);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CRA} />
        {menu.map((data, i) => {
          const { component: Component, ...rest } = data;
          return (
            <Route
              key={data + i.toString()}
              exact
              {...rest}
              render={(routeProps) => <Component {...routeProps} />}
            />
          );
        })}
        {/* <Redirect path="*" to="/" /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
