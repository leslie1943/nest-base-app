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


### SQL: RIGHT JOIN
```sql
SELECT * FROM t_type a RIGHT JOIN t_user b on a.type_id = b.user_type
-- 等同于
SELECT * FROM t_type a, t_user b on a.type_id(+) = b.user_type;
```
- `RIGHT JOIN`: 右侧表 `t_user` 的数据都被查询出来. 左侧表符合条件的显示对应的值, 不符合条件的显示`NULL`
- 上面的 `RIGHT JOIN` 等于 
```sql
SELECT * FROM t_user a LEFT JOIN t_type b on a.user_type = b.type_id;
```

| type_id | type_name | user_id | user_name | user_team | user_type |
| -- | -- | -- | -- | -- | -- |
| 1 | type1 | 1 | suzhen | 1 | 1 |
| NULL  | NULL  | 2 | moon  | 2 | NULL |
| 2 | type2 | 3 | leslie | 5 | 2  |
| 3 | type3 | 4 | dora | NULL  | 3 |
| NULL | NULL | 5 | mark | 3 | 6 |
| 1 | type1 | 6 | suzhen2 | 1 | 1 |
