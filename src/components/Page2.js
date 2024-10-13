import React from 'react';
import favicon from '../favicon.ico';

const Page2 = ({ onRouteChange }) => (
  <div className='App'>
    <header>
       
      <h1 className='App-title'>Welcome to react</h1>
    </header>
    <button onClick={() => onRouteChange('page1')}>Page1</button>
    <button onClick={() => onRouteChange('page3')}>Page3</button>
  </div>
)

export default Page2;