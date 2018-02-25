import React from 'react';
import { 
  BrowserRouter,
  Link,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import {Design, Designs, NewDesign} from './Designs';
import NoMatch from './NoMatch';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">

          <header className="app-header">
            <h1 className="app-title">
              <Link to="/">
                descrit
              </Link>
            </h1>
          </header>

          <div className="app-body">
            <Switch>
              <Redirect exact from="/" to="/designs"/>
              <Route exact path="/designs" component={Designs}/>
              <Route path="/designs/new" component={NewDesign}/>
              <Route path="/designs/:designId" component={Design}/>
              <Route component={NoMatch} />
            </Switch>
          </div>

          <footer>
            Footer
          </footer>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
