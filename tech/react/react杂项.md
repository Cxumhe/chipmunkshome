# 井字棋游戏
在render中调用函数，
```jsx
<Square value={squares[0]} onSquareClick={handleClick(0)} />
```
会导致handleClick(0)调用成为渲染中的一部分，因为handleclick（）函数中有setState，所以会导致无限循环，所以应该将函数作为props向下传递。

所以使用了
```jsx
<Square value={squares[0]} onSquareClick={() => { handleClick(0) }} />
```
这种写法