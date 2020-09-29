import React from 'react';
import Stateful from './components/Stateful/Stateful';
import Stateless from './components/Stateless/Stateless';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="container bg-primary">
      <Stateful />
      <Stateless text="Un texto desde props" color="hola" />
      <Counter />
    </div>
  );
}

export default App;
