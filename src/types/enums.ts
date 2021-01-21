// 定义棋子的类型枚举
export enum EChessType {
  none,
  red,
  black
}

// 游戏的状态
export enum EGameStatus{
  gaming, // 游戏正在进行中
  redWin, // 红方赢
  blackWin, // 黑方赢
  equal, //平局
}