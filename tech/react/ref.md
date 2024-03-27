
reference: 引用

场景：希望直接使用dom元素中的某个方法，或者希望直接使用自定义组件中的某个方法，

1. ref作用于内置的html组件，得到的将是真实的dom对象
2. ref作用于类组件，得到的将是类的对象
3. ref不能作用于函数组件

ref不再推荐使用字符串赋值，字符串赋值的方式未来可能会被移除

目前，ref推荐使用对象或是函数

**对象**

通过React.createRef 函数创建
```jsx
class Comp {
	constructor(props) {
		super(props);
		const this.txt = React.createRef();
	}

	handleClick = () => {
		this.txt.current.focus();
	}
}
```


**函数**

```jsx
<input ref={el => { this.txt = el; }} />
```

函数的调用时间：

1. componentDidMount 的时候会调用该函数
	1. 在componentDidMount 事件中可以使用ref
2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在componentDidUpdate之前。（调用了两次）
	1. 旧的函数被调用时，传递null
	2. 新的函数被调用时，传递对象
3. 如果ref所在的组件被卸载，会调用函数

**谨慎使用ref**

能够使用属性和状态进行控制，就不要使用ref。

1. 调用真实DOM对象中的方法
2. 某个时候需要调用类组件的方法

