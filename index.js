const CODES = require('http').STATUS_CODES;
const ExtendedError = require('rdi-extended-error');

/** ошибка http */
class HttpError extends ExtendedError {
  /**
   * конструктор
   *
   * @param {Number} status            Статус ответа
   * @param {String} message           Сообщение ответа
   * @param {Object} addition          Дополнительная информация об ошибке
   * @param {Object} addition.body     Тело ответа
   * @param {Object} addition.headers  Заголовки ответа
   *
   * @return {HttpError}
   */
  constructor(status=500, {
    message = CODES[status],
    body = {},
    headers = {}
  } = {}) {
    super(message);

    this.status = status;
    this.body = body;
    this.headers = headers;
  }
}

module.exports = HttpError;
