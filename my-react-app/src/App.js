import './App.css';
export default App;

function App() {
  return (
    <div className="App">
      <form className="OtherStuff">
        <label>Username: </label>
        <input type = "text"/> <br/>
        <label>Password: </label>
        <input type = "password"/> <br/>
        <button type="submit">Create profile</button>
      </form>
    </div>
  );
}
