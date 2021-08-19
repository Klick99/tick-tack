import React from "react";
import './Board.css'
import Box from "./Box"

const Board = ({boxes, handleClick, lineIndexes}) => {

   return (
      <div className='board'>
         {boxes.map((box, index) =>
          <Box key={index} value={box} handleClick={()=> handleClick(index)} lineIndexes={lineIndexes} index={index}/>
        )}
      </div>
   )
}

export default Board
