import logo from './logo.svg';
import './App.css';
import Name from './components/Hello'
import Learning from './components/Learning'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Name/>
        <Learning/>
      </header>
    </div>
  );
}

export default App;
