import Calendar from './components/Calendar';
import events from './events'
import './App.css';

function App() {

  return (
    <div className="app">
      <Calendar events={events}/>
    </div>
  );
}

export default App;
