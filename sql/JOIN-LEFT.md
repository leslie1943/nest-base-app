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


### SQL: LEFT JOIN
```sql
SELECT * FROM t_user a LEFT JOIN t_team b on a.user_team = b.team_id
-- 等同于
SELECT * FROM t_user a , t_team b on a.user_team = b.team_id(+);
```
- `LEFT JOIN`: 左侧表 `t_user` 的数据都被查询出来.
- `ON`: 关联条件 => 匹配条件: 对于 `LEFT JOIN` 右侧的表 `t_team` 满足匹配条件的显式右侧表的记录信息. 不满足匹配条件的显式右侧表对应字段的记录显式为 `NULL`

| user_id | user_name | user_team | user_type | team_id | team_name |
| -- | -- | -- | -- | -- | -- |
| 1 | suzhen | 1 | 1 | 1 | team1 |
| 2 | moon | 2 | NULL  | 2 | team2 |
| 3 | leslie | 5 | 2 | NULL | NULL  |
| 4 | dora | NULL | 3 | NULL  | NULL |
| 5 | mark | 3 | 6 | 3 | team3 |
| 6 | suzhen2 | 1 | 1 | 1 | team1 |

- `LEFT JOIN` + `AND`
```sql
SELECT * FROM t_user a LEFT JOIN t_team b on a.user_team = b.team_id and b.team_id = 1
-- 表 t_user 和 t_team 满足 a.t_user = b.team_id and b.team_id = 1匹配条件的只有第1条和最后1条记录
```

| user_id | user_name | user_team | user_type | team_id | team_name |
| -- | -- | -- | -- | -- | -- |
| 1 | suzhen | 1 | 1 | 1 | team1 |
| 2 | moon | 2 | NULL  | NULL | NULL |
| 3 | leslie | 5 | 2 | NULL | NULL  |
| 4 | dora | NULL | 3 | NULL  | NULL |
| 5 | mark | 3 | 6 | NULL | NULL |
| 6 | suzhen2 | 1 | 1 | 1 | team1 |

- `LEFT JOIN` + `WHERE`
```sql
SELECT * FROM t_user a LEFT JOIN t_team b on a.user_team = b.team_id WHERE b.team_id = 1
-- SELECT * FROM t_user a LEFT JOIN t_team b on a.user_team = b.team_id WHERE b.team_id = 1 AND (a.user_id = 1 OR a.user_id = 6)
```
| user_id | user_name | user_team | user_type | team_id | team_name |
| -- | -- | -- | -- | -- | -- |
| 1 | suzhen | 1 | 1 | 1 | team1 |
| 6 | suzhen2 | 1 | 1 | 1 | team1 |

- `LEFT JOIN` + `WHERE` + `AND`
```sql
SELECT * FROM t_user a LEFT JOIN t_team b on a.user_team = b.team_id WHERE b.team_id = 1 AND a.user_id = 1
```
| user_id | user_name | user_team | user_type | team_id | team_name |
| -- | -- | -- | -- | -- | -- |
| 1 | suzhen | 1 | 1 | 1 | team1 |


### ON VS WHERE
- 查询先按`ON`后的匹配条件行成符合要求的临时表
- `WHERE`过滤条件