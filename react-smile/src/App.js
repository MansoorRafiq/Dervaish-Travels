import logo from './logo.svg';
import './App.css';
import Favorite from './components/Hello'
import Learning from './components/Learning'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Learning/>
        <Favorite name='Bannana'/>
        <Favorite name='Milk'/>
        <Favorite name='Fish'/>
      </header>
    </div>
  );
}

export default App;
