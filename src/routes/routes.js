import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {urls} from './router-urls'
import SmartMeeting from "../components/SmartMeeting";

const Routes =(props)=>{
  return(
    <Router>
        <Switch>
            <Route exact path={urls.HOME} component={SmartMeeting} />
        </Switch>
    </Router>
  )
}

export default Routes;