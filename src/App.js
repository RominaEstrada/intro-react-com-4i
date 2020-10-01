import React from 'react';
import Stateful from './components/Stateful/Stateful';
import Stateless from './components/Stateless/Stateless';
import Counter from './components/Counter/Counter';
import CicloDeVida from './components/CicloDeVida/CicloDeVida';
import Layout from './components/Layout/Layout';
import Form from './components/Form/Form'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={CicloDeVida} />
          <Route path="/productos" exact component={Counter} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
