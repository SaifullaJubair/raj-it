import React from 'react';
import './BtnTree.css'
const BtnThree = ({ children }) => {
   return (
      <button className="custom-btn btn-3"><span>{children}</span></button>
   );
};

export default BtnThree;