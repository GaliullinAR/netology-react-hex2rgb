import React, { useState, useRef } from 'react';
import './App.css';
import HexToRgb from './components/HexToRgb';
import { validateColor } from './validateColor';
import hexRgb from 'hex-rgb';



function App() {
  const [value, setValue] = useState('');
  const currentInput = useRef(null);

  const onChangeInput = (e: React.ChangeEvent<any>):void => {
    e.preventDefault();

    let result;
    // const color = e.target.value.length === 7 ? hexRgb(e.target.value, { format: 'array' }) : [];
    try {
      result = e.target.value.length === 7 ? hexRgb(e.target.value, { format: 'array' }) : [];
      let color = result.length > 0 ? `rgba(${result.join(',')})` : 'Ошибка!';
      setValue(color);
    } catch (error) {
      result = 'Ошибка!';
      setValue(result);
    }
    
  }

  return (
    <div className="App">
      <HexToRgb value={value} on={onChangeInput} reference={ currentInput } />
    </div>
  );
}

export default App;
