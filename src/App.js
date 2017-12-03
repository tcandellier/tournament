import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/navbar';
import Drawer from './components/drawer';
import Footer from './components/footer';
import Ranking from './pages/ranking';
import Rounds from './pages/rounds';

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
        <header className="mdl-layout__header">
          <NavBar />
        </header>
        <Drawer />
        <main className="mdl-layout__content">
          <Switch>
            <Route path='/ranking' component={Ranking} />
            <Route path='/rounds' component={Rounds} />
            <Redirect to='/ranking' />
          </Switch>
        </main>
        <footer className="mdl-mini-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
