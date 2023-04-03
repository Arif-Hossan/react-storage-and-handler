import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import Watch from './components/Watch/Watch';
import Profiles from './components/Profiles/Profiles';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <Watch></Watch>
      <Profiles></Profiles>
    </div>
  );
}

export default App;
