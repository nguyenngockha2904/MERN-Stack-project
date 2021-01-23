
import './App.css';
import { Header } from './Header.js';
import { SwipeButtons } from './SwipeButtons';
import { TinderCards } from './TinderCards';

function App() {
  return (
    <div className="App">
      {/* <h1>lets build the MERN TINDER clone guys!</h1> */}
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
