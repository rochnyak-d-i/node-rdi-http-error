# HTTP Error

### Установка
```bash
npm i https://git@github.com/rochnyak-d-i/node-rdi-http-error
```
### Работа
```js
const HttpError = require('rdi-http-error');

throw new HttpError(500);
throw new HttpError(400, {message: 'Very bad request'});
```
