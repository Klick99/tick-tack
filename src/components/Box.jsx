import React from "react";
import './Box.css'

const Box = ({value, lineIndexes, index, handleClick}) => {
   return (
      <>
        <button className={(lineIndexes !== null  && lineIndexes.some(el => el === index))
                            ? 'checked'
                            : 'box'}
                onClick={handleClick}>{value}</button>
      </>
   )
}

export default Box
