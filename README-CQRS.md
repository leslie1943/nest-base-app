### Hint: CQRS
- Run process:
- 1: `controller` 接收路由, 分辨是 `CUD(create/update/delete)`操作还是 `R(read)` 操作
- 2.1: 如果是`CUD`操作, 调用 `this.CommandBus.execute()`
- 2.2: 如果是`R`操作, 调用 `this.QueryBus.execute()`


### Hint: 🚀🚀 Read
```ts
@Get()
async findAll(): Promise<Hero[]> {
    return this.queryBus.execute(new GetHeroesQuery());
}
```
- 以查询R操作为例: 在 `controller` 里 执行 `this.queryBus.execute(new GetHeroesQuery())`
- 3: 其中 `GetHeroesQuery()` 是 在 `/queries/impl/` 文件夹中定义的 `class`
- 4.1: 步骤[3]中的 `class GetHeroesQuery` 在 `/queries/handlers/` 下的 `class GetHeroesHandler` 中被引用
- 4.2: 步骤[3]中的 `class GetHeroesQuery` 被 🎃🎃🎃 装饰器 `@QueryHandler` 🎃🎃🎃 作为参数使用, 并作用于 `GetHeroesHandler` 上 (依赖注入)
- 4.3: 所以 当 步骤[2.2] 中调用 `new GetHeroesQuery()` 的时候 实际上执行的是 `GetHeroesHandler` 中的 `execute` 方法
- 4.4: 步骤 [4.3] 中的 `execute()` 方法是由 系统的 🔐🔐🔐 `IQueryHandler interface`🔐🔐🔐 定义的, 必须实现
- 5: 在 `execute()` 方法中 调用 `repository` 中的方法


### Hint: 🚀🚀 CUD
```ts
@Post(':id/kill')
async killDragon(@Param('id') id: string, @Body() dto: KillDragonDto) {
    return this.commandBus.execute(new KillDragonCommand(id, dto.dragonId));
}
```
- 以查询CUD操作为例: 在 `controller` 里 执行 `this.commandBus.execute(new KillDragonCommand(id, dto.dragonId))`
- 6: 其中 `KillDragonCommand()` 是 在 `/commands/impl/` 文件夹中定义的 `class`
- 7.1: 步骤[6]中的 `class KillDragonCommand` 在 `/commands/handlers/` 下的 `class KillDragonHandler` 中被引用
- 7.2: 步骤[6]中的 `class KillDragonCommand` 被 🎃🎃🎃 装饰器 `@CommandHandler` 🎃🎃🎃 作为参数使用, 并作用于 `KillDragonHandler` 上 (依赖注入)
- 7.3: 所以 当 步骤[7.2] 中调用 `new KillDragonCommand()` 的时候 实际上执行的是 `KillDragonHandler` 中的 `execute` 方法
- 7.4: 步骤 [7.3] 中的 `execute()` 方法是由 系统的 🔐🔐🔐`ICommandHandler interface`🔐🔐🔐 定义的, 必须实现
- 8: 在 `execute()` 方法中 调用 `EventPublisher` 中 的实例对象`publisher`的方法 `this.publisher.mergeObjectContext()`, 并将 `repository` 中定义的方法作为传递进去
```ts
const hero = this.publisher.mergeObjectContext( // ?????????
    await this.repository.findOneById(+heroId),
);
hero.killEnemy(dragonId);
hero.commit();
```
- 9:  返回的 `hero`对象具有 是`/models/hero.model.ts`中定义的 `Hero`类的实例
- 10: 所以 `hero`具有 `Hero` 的 实例属性 `id` 和 实例方法 `killEnemy`
```ts
killEnemy(enemyId: string) {
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
}
```
- 11: 当调用`killEnemy`的时候实际上 调用了`/events/impl/`下定义的`class HeroKilledDragonEvent`
- 12.1 : 在步骤[11]中 `class HeroKilledDragonEvent` 在`events/handlers`下的 `class HeroKilledDragonHandler`中被引用
- 12.2 : 步骤[11]中的 `class HeroKilledDragonEvent` 被 🎃🎃🎃 装饰器 `@EventsHandler` 🎃🎃🎃 作为参数使用, 并作用于 `HeroKilledDragonHandler` 上 (依赖注入)
- 12.3: 所以 当 步骤[12.2] 中调用 `new HeroKilledDragonEvent()` 的时候 实际上执行的是 `HeroKilledDragonHandler` 中的 `handle` 方法
- 12.4: 步骤 [12.3] 中的 `handle()` 方法是由 系统的 🔐🔐🔐 `IEventHandler interface` 🔐🔐🔐 定义的, 必须实现
- 13. 在`handle`方法中再去使用`repository`做逻辑操作或者数据库操作

## 
- 先走 XXXX-command 或者 XXXX-query , 再走对应的 XXXX-handler