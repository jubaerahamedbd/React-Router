import './App.css';
import { DadaProvider } from './components/Context';
import Son from './components/Son';

function App() {

  return (
    <div className="App">
      <DadaProvider value="Dada Sent Text to Puti">
        <Son />
      </DadaProvider>
    </div>

  );
}

export default App;
