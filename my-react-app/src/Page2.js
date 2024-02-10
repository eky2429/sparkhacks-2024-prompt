import './App.css';
export default function Page2() {
    return (
      <div className="App">
        <div class="dropdown">
            <button>Profile</button>
            <div class="dropdown-options">
                <a href="#">Week1</a>
                <a href="#">Week2</a>
                <a href="#">Week3</a>
            </div>
        </div>
      </div>
    );
  }