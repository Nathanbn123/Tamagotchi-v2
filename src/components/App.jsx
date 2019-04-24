import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

import TamagotchiControl from './TamagotchiControl';

function App(){
  return (
      <div>
        <TamagotchiControl/>
      </div>
  )
}

export default App;
