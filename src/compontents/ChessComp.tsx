import { EChessType } from "../types/enums";
import { IChessType } from "../types/inters";
import "./../style/ChessComp.css"

export function ChessComp(props: IChessType) {
  let chess = null;
  if (props.type === EChessType.red) {
    chess = <div className="red chess-item">帅</div>
  } else if (props.type === EChessType.black) {
    chess = <div className="black chess-item">将</div>
  }

  return (
    <div className="chess-conatiner" onClick={
      () => {
        if (props.onClick && props.type === EChessType.none) {
          // 如果点击事件存在，并且棋子的位置是空白的，执行回调函数
          props.onClick();
        }
      }}>
        {chess}
    </div>
  )
}