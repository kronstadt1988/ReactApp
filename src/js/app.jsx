import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout.jsx';
import Header from './components/header-components/header.jsx';
import Body from './components/body-components/body.jsx';
import Footer from './components/footer-components/footer.jsx';

import { Router, Route, Link, browserHistory } from 'react-router'

class App extends React.Component {
  render(){
    return (
      <div>       
        <Layout/>
        {this.props.children}
      </div>
    )
  }
}

const app = document.getElementById('example')


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/layout(/: layoutId)" component={Layout} />
      <Route path="/header" component={Header} />
      <Route path="/body" component={Body} />
      <Route path="/footer" component={Footer} />
    </Route>
  </Router>
, app)

// ReactDOM.render(<App/>, app)



