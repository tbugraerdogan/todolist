import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList.js';

function App() {
  return (
    <div classname="App">
      <header classname="App-header">
        <h1>my todo app</h1>
      </header>
      <main>
        <TodoList/>
      </main>
    </div>);
}

export default App;
