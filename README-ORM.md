
- `npm install -g ts-node`

```json
"scripts": {
    "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"    
}
```

- `typeorm entity:create -n User -d src/user/entity` or `npm run typeorm migration:run`

### Create a new Entity
- typeorm entity:create -n User