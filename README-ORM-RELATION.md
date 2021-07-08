### ManyToMany
```ts
@ManyToMany(() => RelationCategory, (category) => category.questions, { cascade: true })
// 第一个参数: 和哪个 Entity 进行关系 对应
// 第二个参数: 和关联Entity的哪个属性对应
```

### ManyToMany - cascade
- 1.对应属性的(catetories)的数据会自动被插入到数据库中 => category1, category1 会自动被写入到数据库中, 反之却不行
```ts
const category1 = new RelationCategory();
category1.name = 'animals';
const category2 = new RelationCategory();
category2.name = 'zoo';

const question = new RelationQuestion();
question.text = 'text: where is animal';
question.title = 'title: where is animal';
question.catetories = [category1, category2];
```
- ONE SIDE ONLY: 多对多关系的cascade只能写在一侧


###  @JoinColumn
-  这个装饰器对于 `@ManyToOne` 是可选的, 但 `@OneToOne` 是必需的
- 这是必选项并且只能在关系的一侧设置. 你设置@JoinColumn的哪一方, 哪一方的表将包含一个"relation id"和目标实体表的外键.

@ JoinColumn不仅定义了关系的哪一侧包含带有外键的连接列, 还允许自定义连接列名和引用的列名。

当我们设置@ JoinColumn时, 它会自动在数据库中创建一个名为propertyName + referencedColumnName的列。 例如：

@ManyToOne(type => Category)
@JoinColumn() // 这个装饰器对于@ManyToOne是可选的, 但@OneToOne是必需的
category: Category;
此代码将在数据库中创建categoryId列。 如果要在数据库中更改此名称, 可以指定自定义连接列名称：

@ManyToOne(type => Category)
@JoinColumn({ name: "cat_id" })
category: Category;
Join 列始终是对其他一些列的引用（使用外键）。 默认情况下, 关系始终引用相关实体的主列。 如果要与相关实体的其他列创建关系 - 你也可以在@ JoinColumn中指定它们：

@ManyToOne(type => Category)
@JoinColumn({ referencedColumnName: "name" })
category: Category;
该关系现在引用Category实体的name, 而不是id。 该关系的列名将变为categoryName


### relations
```ts
@Get('load')
async findPU() {
  const res = await this.xxxRepository.findOne(2, { relations: ['user'] });
  return res;
}
```
- `relations`是指, 当前`xxxRepository`实例对应的`entity`中列名`Column`为`user`的列
- http://localhost:3000/relations/load
- http://localhost:3000/photos/load

### setParameters
```ts
 const posts = await this
    .createQueryBuilder('post')
    .where((qb: any) => {
      const subQuery = qb
          .subQuery()
          .select('"tempTb".uuid')
          .leftJoin('user', 'u', 'u.id = "tempTb".uuid')
          .from(`( ${ userQb.getQuery()} )`, 'tempTb')
          .setParameters(userQb.getParameters())
          .where(`"tempTb".otype = 'user' AND u.status = :status`, { status: AccountStatus.Active })
          .getQuery();
      // tslint:disable-next-line:prefer-template
      return 'post.user_id IN ' + subQuery;
    }).getMany();
    return posts
```