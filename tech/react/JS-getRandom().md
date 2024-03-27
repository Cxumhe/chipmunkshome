*转载*：[JS-理解math.floor(math.random() * (max - min + 1)) + min的含义_js中math.floor为什么会差1-CSDN博客](https://blog.csdn.net/YuKing_HONG/article/details/113757973?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-113757973-blog-107180204.235^v43^pc_blog_bottom_relevance_base4&spm=1001.2101.3001.4242.3&utm_relevant_index=7)

## 理解math.floor(math.random() * (max - min + 1)) + min的含义

math.floor：向下取整 

math.random：伪随机数在范围从**0到**小于**1**，也就是说，从0（包括0）往上，但是不包括1（排除1）。简化  0≤math.random<1 。

####  程序：随机两个数之间的整数，包含这两个数。

![](../img/JS-getRandom()-20240309173936.png)

理解：举例说明如果 getRandom(7,11) ，取值也就min=7，max=11；

max - min ，也就是11-7=4，这里是说7到11的差值是4。

#### 先来理解：math.random() * (max - min +1)

前面说了 0≤math.random<1，math.random() *(max - min )，是不是就是 0≤math.random() * (max - min )<4，为啥要把他们相乘呢？因为max - min是最大值和最小值的差值，乘以一个math.random，就得到这个差值的随机值。然后由于0≤math.random() * (max - min )<4，那么math.random() * (max - min )就取不到4这个值，再怎么大都是3.999999999999......，而我们说要随机两个数之间的整数，包含这两个数，取不到4，那就是说不能7+4，也就是不能取到11，那不行。所以我们需要+1，就变成math.random() * (max - min + 1)。math.random() * (max - min + 1)这一串就是大于等于0，小于5了。math.random() * (max - min+1 )这一串就有可能得到的是大于4的数，比如4.8888，那么7+4.8888=11.8888了，所以math.floor用上了。

#### 再来理解：math.floor(math.random() * (max - min )) + min

由上面我们知道math.random() * (max - min +1)的范围了，math.floor：向下取整的，经过math.floor以后，它（math.random() * (max - min +1)这一串）最大只能取到4这个值了。最小是0， + min这个应该很好理解了，math.random() * (max - min +1)是差值可能出现的随机差值，是要加在原本最小值min上的。