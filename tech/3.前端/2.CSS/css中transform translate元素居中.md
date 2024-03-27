转载：[css中的“ transform: translate(-50%, -50%)； “的意思_transform: translatex(-50%);-CSDN博客](https://blog.csdn.net/qq_45207162/article/details/131215863)

这种特定的用法`（translate(-50%, -50%)）`经常和` position: absolute; top: 50%; left: 50%;` 一起使用，用于将[元素居中](https://so.csdn.net/so/search?q=%E5%85%83%E7%B4%A0%E5%B1%85%E4%B8%AD&spm=1001.2101.3001.7020)。
```css
.item {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
```
这里的原理是，首先通过 `top: 50%; left: 50%;` 将元素的左上角移到其容器的中心，然后再通过 `translate(-50%, -50%) `向左和向上移动元素的一半宽度和一半高度，以此达到完全居中的效果。