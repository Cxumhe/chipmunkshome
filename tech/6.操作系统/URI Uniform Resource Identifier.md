> 参考资料 
> [Uniform Resource Identifier - Wikipedia](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#URLs_and_URNs)
> [(42 封私信 / 80 条消息) uri中为什么本地文件file后面跟三个斜杠, http等协议跟两个斜杠? - 知乎 (zhihu.com)](https://www.zhihu.com/question/37063799)

![](../img/URI_syntax_diagram.svg.png)

	为什么file有三个斜杠？

```
URL 标准规定 file URL 采用 file://<host>/<path> 形式。 作为一个特例，<host> 可以是空字符串，它被解释为“解释该 URL 的计算机”。 因此，file URL 通常具有三个斜杠 (**///**)。
```
