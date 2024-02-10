import './App.css';
export default App;

function App() {
  return (
    <>
    {/* Login */}
      <form className="Login Center OtherStuff">
        <label>Username: </label>
        <input type = "text"/> <br/>
        <label>Password: </label>
        <input type = "password"/> <br/>
        <button type="submit">Create profile</button>
      </form>
    </>
  );


}

// TODO: mainMenu.js after signin page