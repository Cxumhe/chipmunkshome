来自袁老师

setState，对状态的改变，**可能**是异步的

> 如果改变状态的代码处于某个HTML元素的事件中，则其是异步的，否则是同步

如果遇到某个事件中，需要同步调用多次，需要使用函数的方式得到最新状态。

最佳实践：
1. 把所有的setState当作是异步的
2. 永远不要信任setState调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（setState的第二个参数）
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState的第一个函数）


React会对异步的setState进行优化，将多次setState进行合并（将多次状态改变完成后，再统一对state进行改变，然后再触发render）(事实上在内部实现中会把异步setState*放入一个队列*中）例如：
```jsx
handleClick = () => {
	this.setState(cur => {
		//参数cur表示当前状态（cur参数是可信的）
		//该函数的返回结果会混合（覆盖）掉之前的状态
		//该函数是异步执行的
		return {
			n: cur.n + 1,
		}
	}, () => {
		//所有状态全部更新完成，并且重新渲染后执行
		console.log('state更新完成', this.state.n);
	})

	this.setState(cur => ({
		n: cur.n + 1,
	}))
	
	this.setState(cur => ({
		n: cur.n + 1,
	}))
}
```
在第一次setState改的时候不会真正改变state的状态，等着，在第二个改的时候也不会真正的改，等着，第三次...然后发现后面没有了，真正改变，所以触发了一次render。


同步举例：
```jsx
constructor(props) {
	super(props);
	setInterval(() => {
		this.setState({
			n: this.state.n + 1,
		})

		this.setState({
			n: this.state.n + 1,
		})

		this.setState({
			n: this.state.n + 1,
		})
	}, 1000)
}
```