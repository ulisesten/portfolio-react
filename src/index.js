import React, { useState} from "react";
import * as ReactDom from "react-dom/client";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { isMobile } from "react-device-detect";

import "./index.css";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Login from "./pages/Login";

let showLeftBar = isMobile ? false : true;

function App() {
  
  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
  const [topicState, setTopicState] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home token={token}/>
          </Route>
          <Route exact path='/course/:topic' component={Topic }/>
          <Route exact path='/login'>
            <Login setToken={setToken} />
          </Route>
        </Switch>
      
      </Router>
    </React.StrictMode>
  )

}

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<App />);
