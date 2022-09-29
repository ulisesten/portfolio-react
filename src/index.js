import React, { useState} from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { isMobile } from "react-device-detect";

import "./index.css";
import Home from "./pages/Home";
import Topic from "./pages/Topic";

let showLeftBar = isMobile ? false : true;

function App() {
  
  const [leftBarVisibility, setLeftBarVisibility] = useState(showLeftBar);
  //const [languageSyllabusState, setLanguageSyllabusState] = useState(null);
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

ReactDom.render(<App />, document.getElementById("root"));
