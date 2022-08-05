import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import UpLoad from './UpLoad/UpLoad'
import Drop from './DragAndDrop/dragDrop'

const Routes = () => {
  <Router>
    <Switch>
      <Route exact path="/" component={UpLoad}/>
      <Route exact path="/dragadrop" component={Drop}/>
      <Redirect path="" to="/dragDrop"/>
    </Switch>
  </Router>
}

export default Routes