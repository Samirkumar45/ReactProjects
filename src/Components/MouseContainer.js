import React, { useState } from 'react';
import HookMouse from '../Hookfunctions/HookMouse';
// import ClassMouse from './ClassMouse';

function MouseContainer() {
  const [display, SetDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => SetDisplay(!display)}>Toogle Display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
