// Component A
import React, { useState } from 'react';
import ComponentB from './Component_B';

const ComponentA = () => {
  const [cendol, setCendol] = useState(2);



  return (
    <div>
      <h1>Assignment 2</h1>
      <ComponentB cendol={cendol} setCendol={setCendol}/>
    </div>
  );
};

export default ComponentA;
