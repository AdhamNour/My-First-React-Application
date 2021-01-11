import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person num={1} />
      <Person num={2} />
      <Person num={3} />
      <Person num={4} />
    </div>
  );
}

export default App;
