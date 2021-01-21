import { EChessType, EGameStatus } from "../types/enums";
import { IGameStauts } from "../types/inters";
import './../style/GameStatusComp.css'



const GameStatusComp:React.FC<IGameStauts> = function(props){
  let content: JSX.Element;
    if (props.gameStatus === EGameStatus.gaming) {
        if(props.nextChess === EChessType.red){
            content = <div className="red">红方落子</div>
        }
        else{
            content = <div className="black">黑方落子</div>
        }
    }
    else{
        if(props.gameStatus === EGameStatus.redWin){
            content = <div className="win red">红方胜利</div>
        }
        else if(props.gameStatus === EGameStatus.blackWin){
            content = <div className="win black">黑方胜利</div>
        }
        else{
            content = <div className="win equal">平局</div>
        }
    }

  return (
    <div className="status">
      {content}
    </div>
  )
}

export { GameStatusComp }