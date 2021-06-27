import React from 'react';
import './style';
import Todo from './components/Todo';

const App = () => (
  <div>
    <h1>My Todos</h1>
    <Todo text="learn react" />
    <Todo text="Master react" />
    <Todo text="Explore the fullstack" />
  </div>
);

export default App;
