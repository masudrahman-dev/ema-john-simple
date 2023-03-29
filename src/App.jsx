import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-[#2a303c]'>
      <Header></Header>

      <Shop></Shop>
    </div>
  );
}

export default App;
