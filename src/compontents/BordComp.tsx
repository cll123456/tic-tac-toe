import { IBord } from "../types/inters";
import React from 'react';
import { ChessComp } from "./ChessComp";
import "./../style/BordComp.css"

const BordComp: React.FC<IBord> = function (props) {
  const isGameOver = props.isGameOver as boolean;
  const list = props.chessList.map((p, index) => {
    return <ChessComp
      key={index}
      type={p}
      onClick={
        () => {
          if (props.onClick && !isGameOver) {
            props.onClick(index)
          }
        }
      }></ChessComp>
  })
  return (
    <div className="bord">
      {list}
    </div>
  )
};

BordComp.defaultProps = {
  isGameOver: false
}

export { BordComp }