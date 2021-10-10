import './App.css';

import TodoCounter from './Components/TodoCounter';
import TodoSearch from './Components/TodoSearch';
import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';

const todos = [
  { text: 'Cortar cebolla', completed: false, type: 'timer' },
  { text: 'Tomar el curso de intro a React', completed: false, type: 'counter' },
  { text: 'Ouvrir le meme chose', completed: false, type: 'once' },
  { text: 'Tomar el curso de intro a React', completed: false, type: 'timer' },
  { text: 'Quelque chose', completed: false, type: 'timer' },
  { text: 'Tomar el curso de intro a React', completed: false, type: 'counter' },
  { text: 'Ouvrir le meme chose', completed: false, type: 'counter' },
  { text: 'Redux course projects', completed: false, type: 'counter' },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index} text={todo.text} type={todo.type} />
        ))}
      </TodoList>
    </>
  );
}

export default App;
