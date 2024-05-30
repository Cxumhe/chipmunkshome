## **一、SQL书写顺序**

在编写SQL查询时，我们通常遵循以下顺序：

 1. **SELECT**：首先指定要检索的列。
 2. **FROM**：然后指定数据来源，即要从哪个表或视图中检索数据。
 3. **WHERE**：接着添加过滤条件，以限制结果集。
 4. **GROUP BY**：如果需要对结果进行分组，指定分组的列。
 5. **HAVING**：在分组后，添加条件以过滤分组的结果。
 6. **ORDER BY**：最后，指定如何对结果集进行排序。
 7. **LIMIT**（可选）：在某些数据库系统中，用于限制返回的记录数量。

一个典型的SQL查询可能如下所示：

```sql
SELECT column1, column2
FROM example_table
WHERE condition
GROUP BY group_column
HAVING group_condition
ORDER BY sort_column ASC
LIMIT number;
```

## **二、SQL执行顺序**

尽管SQL语句的书写顺序如上所述，但数据库引擎在执行这些语句时遵循不同的顺序。一个典型的SQL查询的执行顺序如下：

```text
FROM → WHERE → GROUP BY → HAVING → SELECT → DISTINCT → ORDER BY → LIMIT
```

 1. **FROM**：查询的第一步是确定数据来源。
 2. **WHERE**：接着，应用过滤条件来缩小结果集。
 3. **GROUP BY**：然后，根据指定的列对结果集进行分组。
 4. **HAVING**：在分组的基础上，应用过滤条件来进一步筛选分组。
 5. **SELECT**：选择最终需要的列，包括聚合函数和表达式。
 6. **DISTINCT**（可选）：如果需要，去除重复的记录。
 7. **ORDER BY**：对结果集进行排序。
 8. **LIMIT**（可选）：最后，限制返回的记录数量。