# Extended Error

### Установка
```bash
npm i git+https://git@github.com/rochnyak-d-i/node-rdi-http-error.git
```
### Работа
```js
const HttpError = require('rdi-http-error');

throw new HttpError(500);
throw new HttpError(400, {message: 'Very bad request'});
```
