import React from 'react';

function Gadget() {
  return (

    <div> Monique was here! </div>

);
}
//component created




const GadgetList = (props) => {

  return (
    <main>
      <h2>Headphones</h2>
      {props.items.map((item) => (<Gadget/>))}
    </main>
  );
}

export default GadgetList;
