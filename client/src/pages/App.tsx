import React, { FC, Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import routes from '@/router'
import Loadable from 'react-loadable'
import Loading from '@/pages/Loading'

const pages = routes.map((route) => {
  if (route.redirect) {
    return <Route key={route.path} exact path={route.path}>
      <Redirect to={route.redirect}></Redirect>
    </Route>
  }
  const LoadableCompoent = Loadable({
    loader: route.component,
    loading: Loading
  })
  return <Route path={route.path} component={LoadableCompoent}></Route>
})

const App = () => {
  return (
    <Router>
      <div className="app">
          {
            pages
          }
        </div>
    </Router>    
  )
}

export default App
