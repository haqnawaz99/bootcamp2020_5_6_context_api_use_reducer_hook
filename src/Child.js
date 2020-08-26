import React, { useContext } from 'react';
import ValueContext from './ValueContext.js'
import valueContext from './ValueContext.js';
function Child(props) {
    let value = useContext(valueContext);
  return (
    <div>
        Child number {value}
    </div>
  );
} 
export default Child;
 