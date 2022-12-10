import logo from './logo.svg';
import './App.css';
import MomentExample from './components/Moment/MomentExample';
import DayjsExample from './components/Dayjs/DayjsExample';
import DayfnsExample from './components/Datefns/DayfnsExample';

function App() {
  return (
    <div className="App">
      <MomentExample />
      <DayjsExample />
      <DayfnsExample />
    </div>
  );
}

export default App;
