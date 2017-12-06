import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/Navbar';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Ranking from './pages/Ranking.Container';
import Rounds from './pages/Rounds';
import Player from './pages/Player';

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
            <Route path='/player' component={Player} />
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
