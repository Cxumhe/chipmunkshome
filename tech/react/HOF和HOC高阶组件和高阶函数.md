
HOF: Higher-Order Function，高阶函数，以函数作为参数，并返回一个函数
HOC: Higher-Order Component，高阶组件，以组件作为参数，并返回一个组件


```jsx
function Comp(props){
	return <h1>撒了肯定放假</h1>
}
```

```jsx
class Comp {

}
```

`<Comp />` React Component Element
`<h1></h1>` React Html Element

通常，可以利用HOC实现横切关注点。

> 举例：20个组件，每个组件在创建和销毁组件时，需要作日记记录
> 20个组件，他们需要显示一些内容，得到的数据结构完全一致


**注意**

1. 不要在render中使用高阶组件（会重复创建组件）
2. 不要在高阶函数内部更改传入的组件