import { EChessType, EGameStatus } from "./enums";

// 棋子的类型，用一个接口来声明
export interface IChessType {
  type: EChessType,
  onClick?: () => void
}

// 棋盘
export interface IBord {
  chessList: EChessType[], // 棋子的数据
  isGameOver?: boolean, // 游戏是否结束
  onClick: (n: number) => void
}

// 游戏接口
export interface IGameState {
  nextChess: EChessType.black | EChessType.red, // 下一个落子的类型，要么是红色，要么是黑色
  gameStatus: EGameStatus, // 游戏的状态
  chessList: EChessType[], // 棋子
}

// 游戏状态的接口
export interface IGameStauts{
  nextChess: EChessType.black | EChessType.red, // 下一个落子的类型，要么是红色，要么是黑色
  gameStatus: EGameStatus, // 游戏的状态
}