import $api from '../http'

const login = async (username, password) => {
  return $api.post('/login', { username, password })
}

const signup = async (username, email, password) => {
  return $api.post('/insert', { username, email, password })
}

const logout = async () => {
  return $api.post('/logout')
}

export { login, signup, logout }
