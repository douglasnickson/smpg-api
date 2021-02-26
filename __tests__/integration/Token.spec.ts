import { Token } from '../../src/entities/Token';

describe('Token', () => {
  it('Should return Token Object', () => {
    const data = {
      accessToken:
        'BQArLV7wA5h_yXXrJBg13eOk6j6T4yksWmceW2Z38WXm92BUAjcjwKQq4DYO5hfcy_RDP6p6WCcACz7rE718dv0uYMcYd2RdQ5iT0B6NjDpyAtfWpJpCS_4PHSk82iXQUnpmwA-RdZ05Rbm9BNYwxSY',
      tokenType: 'Bearer',
      expiresIn: '3600',
      refreshToken:
        'AQDY5Cwf9zXgPocfscTgxbqRkPOh-rFWZIW5DnwazTLhas96S9DTktOqjVx7FiZC517VFqno0OlysZaqVsPZ39_tMlCKaUHJEBQ6vUrV4uyuxxD8PKnsaCeZJqD9tQ7ZxJI',
      scope: '',
    };
    const token = new Token(data);
    expect(token.accessToken).not.toBe('');
  });
});
