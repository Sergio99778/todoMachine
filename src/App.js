import './App.css';

import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import CreateTodoButton from './Components/CreateTodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: false, type: 'timer' },
  { text: 'Tomar el curso de intro a React', completed: false, type: 'counter' },
  { text: 'Llorar con la llorona', completed: false, type: 'once' },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
