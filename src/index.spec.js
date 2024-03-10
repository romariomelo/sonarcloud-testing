const hello = require('./index');

describe('Index', () => {
  test('should return the correct message', () => {
    const name = 'Romário';

    const message = hello(name);

    expect(message).toBe('Hello Romário!');
  });
});
