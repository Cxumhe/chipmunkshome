```cpp
int *p;

p = (int *)malloc( sizeof(int) );
```
首先要说的是，使用 malloc 函数，请包含 stdlib.h（C++ 中可以是 cstdlib），而不是 malloc.h 。因为 malloc.h 从来没有在 C 或者 C++ 标准中出现过！因此并非所有编译器都有 malloc.h 这个头文件。但是所有的 C 编译器都应该有 stdlib.h 这个头文件。

**在 C++ 中，强制转换 malloc() 的返回值是必须的，否则不能通过编译。**

**在 C 中，这种强制转换却是多余的，并且不利于代码维护。**

起初，C 没有 void* 指针，那时 char* 被用作泛型指针（generic pointer），所以那时  malloc 的返回值是 char* 。因此，那时必须强制转换 malloc 的返回值。后来，ISO C 标准定义了 void* 指针作为新的泛型指针。并且 void* 指针可以不经转换，直接赋值给任何类型的指针（函数指针除外）。从此，malloc 的返回值变成了 void* 之后，便不再需要强制转换 malloc 的返回值了。

1)在C++中因为malloc、realloc、calloc返回的是不确定类型的指针，所以返回之前必须经过类型强制转换，否则编译报错，如：“ 不能将void*赋值给int*变量 ”。在**C中不需要强制转换**。

2)只管分配，不会初始化，内存空间的值可能是随机的。如果分配的这块空间原来没有被使用过，那么其中每个值都可能是0。相反，空间里面可能遗留各种各样的值。

3)实参为需要分配的字节大小，如果malloc(1)，那么系统只分配了1个字节的内存空间，这时注意，如果在这块空间中存放一个int值，由于int类型占4个字节，那么还有3个字节未分配空间，系统就会在已经分配的那1个字节的基础上，依次向后分配3个字节空间，而这就占有了“别人”的3个字节空间，“别人”原有的值就被清空了。

4)分配的空间不再使用时，要用free函数释放这块内存空间。

##### 动态内存分配函数有：

- ##### [malloc](https://so.csdn.net/so/search?q=malloc&spm=1001.2101.3001.7020)函数：
    

  malloc的全称是memory allocation，中文名为**动态内存分配**，用于申请一块连续的指定大小的内存块区域以`void*`类型返回分配的内存区域地址，当无法知道内存具体位置的时候，想要绑定真正的内存空间，就需要用到动态的分配内存，且分配的大小就是程序要求的大小。  
  函数原型为：**void *malloc(unsigned int size)；**，其作用是在内存的动态空间中分配一个长度为size的连续空间。此函数的返回值是分配区域的起始地址，或者说，此函数是一个指针型函数，返回的指针指向该分配域的开头位置。  
  如果分配成功则返回指向被分配内存的指针**(此空间中的初始值不确定)**，否则返回空指针NULL。当内存不再使用时，应使用free()函数将内存块释放。函数返回的指针一定要适当对齐，使其可以用于任何数据对象。

- ##### calloc函数：
    

  calloc的全称是clear allocation，中文名为**动态内存分配并清零**，···。  
  函数原型为：**void *calloc(unsigned int num，unsigned int size)；**，···。  
  如果分配成功则返回指向被分配内存的指针**(此空间中的初始值为0)**，否则返回空指针NULL，···。

- ##### [realloc](https://so.csdn.net/so/search?q=realloc&spm=1001.2101.3001.7020)函数：
    

  realloc的全称是reset allocation，中文名为**动态内存调整**。
  函数原型为：**void *realloc(void *mem_address, unsigned int newsize)；**，
  先判断当前的指针是否有足够的连续空间，如果有，扩大mem_address指向的地址，并且将mem_address返回，如果空间不够，先按照newsize指定的大小分配空间，将原有数据从头到尾拷贝到新分配的内存区域，而后释放原来mem_address所指内存区域(原来的指针会自动释放，不需要再使用free)，同时返回新分配的内存区域的首地址。重新分配成功返回指向被分配内存的指针，否则返回空指针NULL。  
  注意：调整后的大小可大可小(如果新的大小大于原内存大小，新分配部分不会被初始化；如果新的大小小于原内存大小，可能会导致数据丢失）。


  示例：
```c
  typedef int STDatatype;
  STDatatype* tmp = realloc(ps->p, sizeof(STDatatype)*newcapacity);
```

- ##### free函数：
    

  函数原型为：**void free(void *ptr)；**，一般使用malloc,calloc,realloc函数进行内存分配后要使用free(起始地址的指针) 对内存进行释放。