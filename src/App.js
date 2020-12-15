import './App.css';
import Header from './component/Header/Header';
import SwipeButtons from './component/SwipeButtons/SwipeButtons';
import TinderCards from './component/TinderCards/TinderCards';

function App() {

  return (
    <div className="app">
      <Header />
      <TinderCards/>
      <SwipeButtons />
    </div>
  );
}

export default App;
