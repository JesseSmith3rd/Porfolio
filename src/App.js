import './App.css';
import Intro from './components/Intro.jsx';
import AppRouter from '/AppRouter.js';

function App() {
  return (   
    <div>
      <Intro/>
    </div>,
    <div className='App'>
      <AppRouter />
    </div>
  );
}

export default App;
