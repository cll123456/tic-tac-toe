import React from "react";
import { EChessType, EGameStatus } from "../types/enums";
import { IGameState } from "../types/inters";
import { BordComp } from "./BordComp";
import "./../style/GameComp.css"
import { GameStatusComp } from "./GameStatusComp";

export class GameComp extends React.Component<{}, IGameState>{
  state: IGameState = {
    chessList: [],
    gameStatus: EGameStatus.gaming,
    nextChess: EChessType.red
  }
  /**
   * 节点挂载的时候调用
   */
  componentDidMount() {
    this.init();
  }
  /**
   * 初始化游戏
   */
  init() {
    this.setState({
      chessList: new Array(9).fill(EChessType.none) as EChessType[],
      gameStatus: EGameStatus.gaming,
    })
  }
  /**
   * 点击棋盘需要落子
   * @param index 
   */
  chessClick(index: number) {
    const arr = this.state.chessList;
    arr[index] = this.state.nextChess;
    const nextChess = this.state.nextChess === EChessType.red ? EChessType.black : EChessType.red;
    
    this.setState({
      chessList: arr,
      nextChess: nextChess,
      gameStatus: this.getStatus(arr, index)
    })

  }
  /**
   * 游戏结果判断
   * @param index 
   */
  getStatus(chesses:EChessType[], index:number):EGameStatus{
   //1. 判断是否有一方获得胜利
   const horMin = Math.floor(index / 3) * 3;
   const verMin = index % 3;
   if ((chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2])
       ||
       (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6])
       ||
       (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== EChessType.none)
       ||
       (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== EChessType.none)) {
       if (chesses[index] === EChessType.red) {
           return EGameStatus.redWin;
       }
       else {
           return EGameStatus.blackWin;
       }
   }
   //2. 判断是否平局
   if (!chesses.includes(EChessType.none)) {
       return EGameStatus.equal;
   }
   //3. 游戏正在进行
   return EGameStatus.gaming;
  }

  render() {
    return (
      <div className="game">
        <h1> # 字棋游戏</h1>
        <GameStatusComp 
        nextChess={this.state.nextChess} 
        gameStatus={this.state.gameStatus}/>
        <BordComp
          chessList={this.state.chessList}
          isGameOver={this.state.gameStatus !== EGameStatus.gaming}
          onClick={this.chessClick.bind(this)}></BordComp>
          <button onClick={
            this.init.bind(this)
          }>重新开始游戏</button>
      </div>
    )
  }
}