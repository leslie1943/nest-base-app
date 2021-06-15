### global cli
- `npm install -g ts-node`

```json
"scripts": {
    "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"    
}
```

- `typeorm entity:create -n User -d src/user/entity` or `npm run typeorm migration:run`

### official documentation
- [typeorm-connection](https://github.com/typeorm/typeorm/blob/master/docs/connection-options.md)

### connection options example
```js
const config = {
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    logging: true,
    synchronize: true,
    entities: [
        "entity/*.js"
    ],
    subscribers: [
        "subscriber/*.js"
    ],
    entitySchemas: [
        "schema/*.json"
    ],
    migrations: [
        "migration/*.js"
    ],
    cli: {
        entitiesDir: "entity",
        migrationsDir: "migration",
        subscribersDir: "subscriber"
    }
}
```
### 🚀🚀🚀 Create a new Entity
- 由于有了上面的配置 可以使用命令 `typeorm entity:create -n User`: 文件将被创建到`src/entity/`下
- 也可以使用命令:  `typeorm entity:create -nUser` -dsrc/user/entity`
-  `-n User`: entity name 
- -d `src/user/entity`: path

### 🚀🚀🚀 Create a new subscriber
- `typeorm subscriber:create -n UserSubscriber`

### 🚀🚀🚀 Create a new migration
- `typeorm migration:create -n UserMigration`


### 关联操作 Entity
- `xxx.entity.ts` 可以单独创建(用于关联),否则不会被加载到数据库中
- 可以在 `xxx.repository` 里 创建多个操作不同 `Entity/Table` 的 `class`
- 然后在 `controller` 里的构造函数中实例化 不同的 `repository 实例`, 用来操作不同的`Entity data`

### 可在 repository里创建 queryBuilder
```js
 findById = async (id: string): Promise<Cat> => {
    return await this.createQueryBuilder()
      .select('cat')
      .from(Cat, 'cat') // EntityTarget, Alias
      .where('cat.id=:id', { id })
      .getOne();
  };
```

### 配置数据库 - 解决 Navicat 2509的问题
- `ALTER USER "root"@"localhost" IDENTIFIED BY "password" PASSWORD EXPIRE NEVER;`
- `ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "12345qwert";`
- `FLUSH PRIVILEGES;` #刷新权限