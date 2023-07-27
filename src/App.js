import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './Actions/index';


function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>Redux App</h4>
      <div className = 'quantity'>
        <a className='quantity_minus' title='Decrement'onClick={()=>dispatch(decNumber())}><span>-</span></a>
        <input name= "quantity_input" type="text" class="quantity_input" value= {myState}/>
        <a className='quantity_plus' title='Plus' onClick={()=>dispatch(incNumber())}><span>+</span></a>
      </div>
    
    </div>
    </>
  );
}

export default App;
