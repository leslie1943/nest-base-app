### 🚀 t_user 🚀

| user_id | user_name | user_team | user_type |
| -- | -- | -- | -- |
| 1 | suzhen | 1 | 1 | 
| 2 | moon | 2 |  | 
| 3 | leslie | 5 | 2 | 
| 4 | dora |  | 3 | 
| 5 | mark | 3 | 6 | 
| 6 | suzhen2 | 1 | 1 | 

### 🚀 t_team 🚀

| team_id | team_name |
| -- | -- |
| 1 | team1 |
| 2 | team2 |
| 3 | team3 |
| 4 | team4 |


### 🚀 t_type 🚀

| type_id | type_name |
| -- | -- |
| 1 | type_1 |
| 2 | type_2 |
| 3 | type_3 |


### SQL: INNER JOIN
- 如果说 `LEFT JOIN`,`RIGHT JOIN` 是拿一张表匹配另外一张表, 匹配上对应信息, 否则返回`NULL`, 而`INNER JOIN`则相当于两张表相互匹配,<font color="red">取其交集</font>. 相当于 `WHERE`后的`=`连接
```sql
SELECT * FROM t_user a INNER JOIN t_team b on a.user_team = b.team_id
```
- 等同于
```sql
SELECT * FROM t_user a, t_team b WHERE a.user_team = b.team_id;
```

| user_id | user_name | user_team | user_type |  team_id | team_name |
| -- | -- | -- | -- | -- | -- |
| 1 | suzhen | 1 | 1 | 1 | team1 |
| 2  | moon  | 2 | NULL  | 2 | team2 |
| 5 | mark | 3 | 6 | 3 | team3  |
| 6 | suzhen2 | 1 | 1 | 1  | team1 |