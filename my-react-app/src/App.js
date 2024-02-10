import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="OtherStuff">
        <label>Username: </label>
        <input/> <br/>
        <label>Password: </label>
        <input/> <br/>
        <button type="submit">Create profile</button>
      </form>
    </div>
  );
}

function Page2() {
  return (
    <div className="App">
      <form>
        <label>Username: </label>
        <input/> <br/>
        <label>Password: </label>
        <input/> <br/>
        <button type="submit">Create profile</button>
      </form>
    </div>
  );
}

export default App;
