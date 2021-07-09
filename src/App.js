import CsvReader from './CsvReader'
import Base64Image from './Base64Image'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CsvReader />
        <Base64Image />
      </header>
    </div>
  );
}

export default App;
