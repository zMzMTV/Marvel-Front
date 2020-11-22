import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Router>
        <Header search={search} setSearch={setSearch} />
        <Switch>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/">
            <Characters />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
