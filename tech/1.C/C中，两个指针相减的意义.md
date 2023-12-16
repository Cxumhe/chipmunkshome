是两个元素的距离，不是地址的距离。

指针变量p1减p2的意义为：

如果是正值 ， 则表示在内存中p1比p2靠后

如果是负值 ， 则表示 在内存中 p1比p2靠前

结果的数字表示 ， 两个地址在内存中间隔多少个指针类型的字节倍数

例如：
```c
#define stack_INIT_SIZE 100
S.base = (SElemType *)malloc(stack_INIT_SIZE*sizeof(char));
```
```c
S.top-S.base == stack_INIT_SIZE;
```
返回的是他们地址的间距为几个char大小的字节。例如满了返回100

100x1=100字节。