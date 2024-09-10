'use client';

const { loginUser } = require('../server/actions');

export async function login(username, pw) {
  const res = await loginUser(username, pw);
  if (res.success) {
    const userObject = {
      username: res.username,
      userId: res.userId,
      loggedIn: true,
    };
    localStorage.setItem('user', JSON.stringify(userObject));
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem('user');
  return true;
}
