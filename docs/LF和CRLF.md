简单来说

- LF（Line Feed）换行（转义序列\\n），换到下一行。
- CR（Carriage Return）回车（转义序列\\r），将车回到开始（即将光标回到行开始）。终端上的下载进度条就是通过CR实现的，通过使用回车符，你的终端可以通过将光标返回到当前行的开头并覆盖任何先前呈现的文本来将文本动画化。

这相当于垂直和水平的两种操作。

在Windows中行尾使用CRLF（先回车后换行），在Linux和Mac OS中为了简化使用LF。（因为现在CRLF标准是多余的，他是假设你在物理打字机的限制下）。

## **检查和转换行尾（在 Bash 中）**

在 bash中，你可以使用带有 A 标志的 cat 查看特定文件的行尾：

如果文件使用 CRLF，您将在每行末尾看到字符串 `^M$`，其中 `^M` 表示回车，`$` 表示换行。下面是一个示例：

```text
    line one^M$
    line two^M$
    line three^M$
```

如果文件使用 LF，那么您只会看到美元符号：

```text
    line one$
    line two$
    line three$
```

ps: 你可以使用[**dos2unix**](https://link.zhihu.com/?target=https%3A//linux.die.net/man/1/dos2unix)命令行程序将文件从CRLF转换为LF。

### **使用 `core.autocrlf` 在 Git 中配置行尾**

可以使用`core.autocrlf`配置告诉git如何处理系统上的行尾。可以通过以下命令完成：

```text
    git config --global core.autocrlf [true|false|input]
```

参考文献：
- [CRLF和LF的差异 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/380574688)
- [git - What's the difference between "* text=auto eol=lf" and "* text eol=lf" in .gitattributes? - Stack Overflow](https://stackoverflow.com/questions/56857990/whats-the-difference-between-text-auto-eol-lf-and-text-eol-lf-in-gitat/56858538#56858538)
- [CRLF vs. LF: Normalizing Line Endings in Git | Aleksandr Hovhannisyan](https://www.aleksandrhovhannisyan.com/blog/crlf-vs-lf-normalizing-line-endings-in-git/)
- [EditorConfig](https://editorconfig.org/)

