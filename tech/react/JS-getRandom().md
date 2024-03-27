_转载_：[JS-理解 math.floor(math.random() \* (max - min + 1)) + min 的含义\_js 中 math.floor 为什么会差 1-CSDN 博客](https://blog.csdn.net/YuKing_HONG/article/details/113757973?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-4-113757973-blog-107180204.235^v43^pc_blog_bottom_relevance_base4&spm=1001.2101.3001.4242.3&utm_relevant_index=7)

## 理解 math.floor(math.random() \* (max - min + 1)) + min 的含义

math.floor：向下取整

math.random：伪随机数在范围从**0 到**小于**1**，也就是说，从 0（包括 0）往上，但是不包括 1（排除 1）。简化   `0≤math.random<1`。

####   程序：随机两个数之间的整数，包含这两个数。

![](<../img/JS-getRandom()-20240309173936.png>)

理解：举例说明如果 getRandom(7,11) ，取值也就 min=7，max=11；

max - min ，也就是 11-7=4，这里是说 7 到 11 的差值是 4。

#### 先来理解：math.random() \* (max - min +1)

`前面说了 0≤math.random<1，math.random() _(max - min )，是不是就是 0≤math.random() _ (max - min )<4，为啥要把他们相乘呢？因为 max - min 是最大值和最小值的差值，乘以一个 math.random，就得到这个差值的随机值。然后由于 0≤math.random() _ (max - min )<4，那么 math.random() _ (max - min )就取不到 4 这个值，再怎么大都是 3.999999999999......，而我们说要随机两个数之间的整数，包含这两个数，取不到 4，那就是说不能 7+4，也就是不能取到 11，那不行。所以我们需要+1，就变成 math.random() _ (max - min + 1)。math.random() _ (max - min + 1)这一串就是大于等于 0，小于 5 了。math.random() \* (max - min+1 )这一串就有可能得到的是大于 4 的数，比如 4.8888，那么 7+4.8888=11.8888 了，所以 math.floor 用上了。`

#### 再来理解：math.floor(math.random() \* (max - min )) + min

由上面我们知道 math.random() _ (max - min +1)的范围了，math.floor：向下取整的，经过 math.floor 以后，它（math.random() _ (max - min +1)这一串）最大只能取到 4 这个值了。最小是 0， + min 这个应该很好理解了，math.random() \* (max - min +1)是差值可能出现的随机差值，是要加在原本最小值 min 上的。
