# 不能使用rollback
	报错：Explicit or implicit commit is not allowed in stored function or trigger.
```sql
DROP TRIGGER IF EXISTS delete_trig;
DELIMITER $$
CREATE TRIGGER delete_trig
BEFORE DELETE
ON product FOR EACH ROW
BEGIN
	DECLARE xh VARCHAR(10);
	DECLARE xm VARCHAR(20);
	SET xh = old.model;
	SET xm = (	
			SELECT model
			FROM pc
			WHERE model = old.model
			UNION
			SELECT model
			FROM laptop
			WHERE model = old.model
			);
	IF xm IS NOT NULL THEN
#		signal sqlstate '20001'
#		set message_text = 'have references in laptop and pc';
		ROLLBACK;
	END IF;
END
$$
DELIMITER ;

DELETE FROM product WHERE model = '1011';

INSERT INTO product 
VALUES("A", 1011, '个人电脑');
```
> [【踩坑日常】Explicit or implicit commit is not allowed in stored function or trigger.-CSDN博客](https://blog.csdn.net/Saedi_0101/article/details/116831457)


最近在做数据库实验，遇到这个问题的题目为：设置一个触发器，该触发器仅允许“dbo”用户可以删除学生表内数据。

网上有很多使用sql server的答案，但是没有MySQL的。是因为写不出来。

隐式提交的定义：  
又名自动提交，即无需显示执行commit语句，session中的操作被自动提交到数据库的过程。  
隐式提交的方式：  
1、正常执行完DDL语句。包括create，alter，drop，truncate，rename。  
2、正常执行完DCL语句。包括grant，revoke，rollback,commit  
3、正常退出数据库管理软件，没有明确发出commit或者rollback。  
参考：[数据库基础知识四：显示提交与隐式提交](https://blog.csdn.net/qq_43686584/article/details/84548264)

---
所以在触发器里是不能用rollback的，同时delete操作也不能NEW.XXX，会报错：There is no NEW row in on DELETE trigger  

# 注意防止无限循环

	在创建trigger时不会报错，执行对相应表的update/insert/delete时报错：Can't update table 'pc' in stored function/trigger because it is already used by statement which invoked this stored function/trigger.
```sql
DROP TRIGGER IF EXISTS update_trig;
DELIMITER $$
CREATE TRIGGER update_trig
BEFORE UPDATE
ON pc FOR EACH ROW
BEGIN
	DECLARE xh INT(10);
	DECLARE xm INT(10);
	SET xh = new.price;
	IF xh IS NULL OR xh <= 0 THEN
#		SIGNAL SQLSTATE '20000'
#		SET MESSAGE_TEXT = 'Price cannot be null or less than or equal to 0';
		UPDATE pc SET price = new.price WHERE model = new.model;
	END IF;
END
$$
DELIMITER ;


UPDATE pc
SET price = 0
WHERE model = "1001";
```
因为在这个表的trigger中已经使用了update/insert/delete，进行相应的update/insert/delete时会进入死循环。

但是如果tigger的update/insert/delete是对其他表的则不会。