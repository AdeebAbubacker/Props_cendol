// Component B
import React from 'react';

const ComponentB = (props) => {
  const Updatevalue = () =>{
    props.setCendol(props.cendol + 10)
  }
  return (
  <div style={{marginTop:"30px"}}>
    {props.cendol}
    <button onClick={Updatevalue} style={{backgroundColor:'skyblue',marginLeft:'10px',
     borderRadius:"10px",width:'140px'}}>Increment by 10</button>

  </div>
  );
};

export default ComponentB;
