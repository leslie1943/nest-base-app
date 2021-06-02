### Hint: Use advantage of express
- In order to take advantage of `express` typings (as in the request: Request parameter example above), `install @types/express` package.

### List of decorators
| Decorator name | Entity name |
| -- | -- |
| `@Request()`, `@Req()` | `req` |
| `@Response()`, `@Res()` | `res` |
| `@Next()` | `next` |
| `@Session()` | `req.session` |
| `@Param(key?:string)` | `req.params` / `req.params[key]` |
| `@Body(key?string)` | `req.body` / `req.body[key]` |
| `@Query(key?string)` | `req.query` / `req.query[key]` |
| `@Headers(name?:string)` | `req.headers` / `req.headers[name]` |
| `@Ip()` | `req.ip` |
| `@HostParam` | `req.hosts` |

| Decorator Method | Original Method  |
| `@Get()` | `get` |
| `@Post()` | `post` |
| `@Put()` | `put` |
| `@Delete()` | `delete` |
| `@Patch()` | `patch` |
| `@Options()` | `options` |
| `@Head()` | `head` |
| `@All()` | `defines an endpoint that handles all of them` |
