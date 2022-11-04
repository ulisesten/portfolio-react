import React, { useState} from "react";
import * as ReactDom from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { isMobile } from "react-device-detect";

import "./index.css";
import Home from "./pages/Home";
import Topic from "./pages/Topic";

let showLeftBar = isMobile ? false : true;

function App() {
  
  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
  const [topicState, setTopicState] = useState(null);

  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path='/' component={Home }/>
          <Route exact path='/course/:topic' component={Topic }/>
        </Switch>
      
      </Router>
    </React.StrictMode>
  )

}

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<App />);
