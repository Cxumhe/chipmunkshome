课外阅读，参考资料：[javascript - js中的this总结 - 山外de楼 - SegmentFault 思否](https://segmentfault.com/a/1190000009069167)



**如果没有特殊处理，在事件处理函数中，this指向`undefined`**

1. 使用bind函数，绑定this
	1. 写在构造函数中，把`[[prototype]]`中的方法提取出来
	2. 在传递时绑定`this`
2. 使用箭头函数
	1. 方法使用箭头函数
	2. 在传递时使用箭头函数

```jsx
constructor(props){
	super(props);
	this.handleClick = this.handleClick.bind(this);
	this.handleOver = this.handleOver.bind(this);
}
```

```jsx
<Tick 
	onClick={this.handleClick.bind(this)}
	clickOver={this.handleOver.bind(this)} />
```

```jsx
handleClick = ()=>{
	console.log(this);
	console.log('点击了');
}

handleOver = ()=>{
	this.setState({
		isOver: true
	})
}
```

```jsx
<Tick 
	onClick={()=>{this.handleClick}}
	clickOver={()=>{this.handleOver}} />
```