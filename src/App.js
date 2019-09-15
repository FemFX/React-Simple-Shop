import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Phones from './pages/Phones';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/phones" component={Phones} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
