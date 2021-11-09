import logo from './logo.svg';
import './App.css';
import styles from './Mycss.module.css'


function App() {
  {/* object css */ }
  const style = {
    color: "Green",
    backgroundColor: 'lightgray',
    width: "250px",
    margin: "5px auto"
  }
  return (

    <div className="App">
      {/* inline css */}
      <h1 style={{
        color: "red", backgroundColor: 'lightblue', width: "250px", margin: "5px auto"
      }}>Inline CSS</h1>
      <h1 style={style}>Object Css</h1>
      {/* External css */}
      <h1 className="TextStyle">External Css</h1>
      {/* Module css */}
      <h1 className={styles.TextStyle}>Module Css</h1>
    </div>

  );
}

export default App;
