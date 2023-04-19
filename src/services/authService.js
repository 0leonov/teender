import instance from '../http'

const login = async ({ username, password }) => {
  return instance.post('user/login.php', { username, password })
}

const signup = async ({ username, email, password }) => {
  return instance.post('user/insert.php', { username, email, password })
}

const logout = async () => {
  return instance.post('user/signout.php')
}

export { login, signup, logout }
