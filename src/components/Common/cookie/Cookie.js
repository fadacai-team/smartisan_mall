import cookie from 'react-cookies'

// 获取当前用户cookie
export const loginUser = () => {
  return cookie.load('token') 
  
}

// 用户登录，保存cookie
export const onLogin = (token,number,name) => {
  cookie.save('token', token, { path: '/' })
  cookie.save('number', number, { path: '/' })
  cookie.save('name', name, { path: '/' })
}

// 用户登出，删除cookie
export const logout = () => {
  cookie.remove('token')
  cookie.remove('name')
  cookie.remove('number')
  window.location.href = '/Login'
}