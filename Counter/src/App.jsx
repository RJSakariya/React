import { useEffect, useState } from 'react';
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(null);
  const [button1, setButton1] = useState(null);
  const [button2, setButton2] = useState(null);
  const [button3, setButton3] = useState(null);
  const hendleIncrement = () => {
    setCount(count + 1)
    triggerAnimation(setButton1);
  }
  const hendleReset = () => {
    setCount(0)
    triggerAnimation(setButton2);
  }
  const hendleDecrement = () => {
    setCount(count - 1)
    triggerAnimation(setButton3);
  }
  const triggerAnimation = (id) => {
    id('animate');
    setTimeout(() => id(null), 300);
  };
  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * 100); 
    const newEffectClass = newRandomNumber % 6 === 0 ? "zigzag-effect blur"
                          : newRandomNumber % 5 === 0 ? "diagonal-effect blur"
                          : newRandomNumber % 4 === 0 ? "shake-effect blur"
                          : newRandomNumber % 3 === 0 ? "expand-contract blur"
                          : newRandomNumber % 2 === 0 ? "spiral-effect blur"
                          : "zigzag-effect blur";
    setCounter(newEffectClass)    
    setTimeout(() => setCounter(null), 1500);
  },[count])
  return (
    <div className='container'>
      <h1 name={count} className={`${counter}`}>{count}</h1>
      <div>
        <button className={`button ${button1}`} onClick={hendleIncrement}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <button className={`button ${button2}`} onClick={hendleReset}>
          <i className="fa-solid fa-0"></i>
        </button>
        <button className={`button ${button3}`} onClick={hendleDecrement} >
          <i className="fa-solid fa-minus"></i>
        </button >
      </div>
    </div >
  );
}