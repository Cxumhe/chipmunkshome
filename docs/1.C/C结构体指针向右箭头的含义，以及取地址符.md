C语言中定义了一个结构体，然后申明一个指针指向这个结构体，那么我们要用指针取出结构体中的数据，就要用到“->”。
```c
scanf ("%d",&p->element[j]);
```
是取值所以需要取地址符。

看看结构体的`->`是怎么用的：

```c
#include<stdio.h>
int main(){
    //定义结构体
    struct student{
        int num;
        char* name;
        char sex;
        int age;
        struct student * next;
    };
    //结构体数据
    struct student stu1={1,"张三",'m',18,NULL};
    struct student stu2={2,"李四",'f',19,NULL};
    struct student stu3={3,"王五",'m',20,NULL};
    struct student stu4={4,"赵六",'f',21,NULL};
    //把数据串起来
    stu1.next=&stu2;
    stu2.next=&stu3;
    stu3.next=&stu4;
    //打印结果可以通过判断next是否为空来结束循环
    struct student * p=&stu1; //定义一个指向第一个元素的指针
    printf("编号\t姓名\t性别\t年龄\n");
    while(p!=NULL){
        printf("%d\t%s\t%s\t%d\n",p->num,p->name,p->sex=='m'?"男":"女",p->age);
        p=p->next;//把指针移到下一个元素
    }
    return 0;
}
```

在C语言中，`scanf`函数需要使用`&`符号对变量取址的原因是因为`scanf`函数需要改写变量的值。C语言采用的参数传递方式有值传递和[引用传递](https://www.zhihu.com/search?q=%E5%BC%95%E7%94%A8%E4%BC%A0%E9%80%92&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3196993287%7D)两种。`scanf`函数使用的是引用传递，即传递变量的地址而不是值本身。通过传递变量的地址，`scanf`函数可以直接修改变量在内存中的值，从而更新变量的值。

C语言设计中偏偏要求使用[取址操作符](https://www.zhihu.com/search?q=%E5%8F%96%E5%9D%80%E6%93%8D%E4%BD%9C%E7%AC%A6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3196993287%7D)`&`的原因有以下几点：

1. [内存访问控制](https://www.zhihu.com/search?q=%E5%86%85%E5%AD%98%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3196993287%7D)：C语言允许对内存进行底层访问和操作，包括读取和修改变量值。使用取址操作符`&`可以确保代码中的内存访问是有意的，避免意外对内存的修改。
2. 避免内存拷贝：C语言中的函数参数传递是值传递，意味着函数会创建参数的副本，而不是直接操作[原始变量](https://www.zhihu.com/search?q=%E5%8E%9F%E5%A7%8B%E5%8F%98%E9%87%8F&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3196993287%7D)。通过取址传递参数，可以避免在[函数调用](https://www.zhihu.com/search?q=%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A3196993287%7D)时进行变量的复制操作，减少了内存开销。

对于赋值运算`a = b + c`，左边的`a`、右边的`b`和`c`都是变量，而不是函数调用。因此，赋值运算并不需要取址操作。赋值运算将右边的表达式计算得到的值存储到左边的变量中，并不需要改变右边变量的值，因此不需要使用取址操作。