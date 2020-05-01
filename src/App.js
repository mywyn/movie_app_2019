import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import "./App.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import SkyNetworks from "./routes/SkyNetworks";

import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/sky" component={SkyNetworks} />
    </HashRouter>
  ) 
}

export default App;