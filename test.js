const assert = require('assert');
const HttpError = require('./index');

describe('HttpError', () => {
  it('Без параметров', () => {
    const error = new HttpError();

    assert.strictEqual(error.status, 500);
    assert.strictEqual(error.message, 'Internal Server Error');
  });

  it('Со статусом', () => {
    const error = new HttpError(400);

    assert.strictEqual(error.status, 400);
    assert.strictEqual(error.message, 'Bad Request');
  });

  it('С сообщением', () => {
    const message = 'Неавторизован';
    const error = new HttpError(401, {message});

    assert.strictEqual(error.status, 401);
    assert.strictEqual(error.message, message);
  });

  it('С дополнительными полями (тело + заголовки)', () => {
    const body = {result: 'Не найдено'};
    const headers = {'Content-Type': 'application/json'};
    const error = new HttpError(404, {body, headers});

    assert.strictEqual(error.message, 'Not Found');
    assert.deepStrictEqual(error.body, body);
    assert.deepStrictEqual(error.headers, headers);
  });
});
