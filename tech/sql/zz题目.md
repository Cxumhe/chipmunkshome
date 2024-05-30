### PTA 10-37 创建分组统计视图
```sql
create view PerView(专业名,修课人数,平均成绩) as
select a.major, count(distinct a.sno), avg(b.grade)
from Student a, SC b
where a.sno = b.sno
group by a.major
```
`count(distinct)`可以去重。

### PTA 10-51 查询名称以“DB_”开头的课程名称
```sql
select cname
from course
where cname like "DB\_%"
```
注意右斜杠的转义字符。
`_`通配符，表示一个字符。
> [MySQL LIKE 子句 | 菜鸟教程 (runoob.com)](https://www.runoob.com/mysql/mysql-like-clause.html)

### PTA 10-53 查询“14计科1”班的学生所学的课程名称和平均成绩
```sql
from students a
left join sc b on a.sno = b.sno
left join course c on b.cno = c.cno
where ...
```
使用多个`left join`。

### PTA 10-82 删除未担任班导师并且未安排课程的教师记录
```sql
delete from
teacher
where TId not in (
    select TId
    from grade
    where TId is not null
    union
    select TId
    from information
    where TId is not null
);
```
第一种方法一定注意要判断非空，因为NOT IN 子查询在处理包含 NULL 值的列时可能会导致不符合预期的结果。这是因为在 SQL 中，与 NULL 比较的结果不是 TRUE 或 FALSE，而是未知或未定义的。
如果 TId 列中包含 NULL 值，而你使用 NOT IN 进行比较，那些与 NULL 比较的行可能会被排除在外，导致不正确的结果。

### PTA 10-90 84.将课程"数据库"(课程编号：1)的上课教室改为NB111，授课教师改为李飞(教师编号：02001)
```sql
update information set
IRoom = "NB111", TId = "02001"
where CId = 1
```
注意修改多个值用逗号。

### PTA 10-76  79.计算机科学与技术3班所有学生都选修了2009-2010-1的操作系统(课程编号为4)，请记录相关信息
```sql
INSERT INTO sc
    (SId, CId, SCTerm)
SELECT student.SId, '4' as CId, '2009-2010-1' as SCTerm
FROM student,
     grade
WHERE student.GId = grade.GId
  AND GName = '计算机科学与技术3班'
```

### PTA 10-107 17.显示1号课程期末考试成绩的平均分（Avg）,四舍五入包保留两位小数

```sql
select round(avg(SCScore3), 2) as Avg
from sc
where CId = 1
```

四舍五入保留两位小数。

### PTA 10-109 19.显示2008年每门课程期末成绩的平均分（Avg）,四舍五入包保留两位小数，显示课程号与平均分，并按分数降序排列

```sql
select CId, round(avg(SCScore3), 2) as Avg
from sc
where SCTerm in ("2008-2009-1", "2008-2009-2")
group by CId
order by Avg desc;
```

zz 2008年份。