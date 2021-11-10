import './App.css';
import MyNavigation from './components/MyNavigation';
import MyRoute from './components/MyRoute';
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavigation />
       
          <MyRoute />
  
      </BrowserRouter>
    </div>
  );
}

export default App;
