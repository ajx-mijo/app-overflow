import { Buffer } from 'buffer'

const tokenName = 'appToken'

export const setToken = (token) => {
  localStorage.setItem(tokenName, token)
}

export const getToken = () => {
  return localStorage.getItem(tokenName)
}

export const getUserId = () => {
  console.log('This the number ->', getPayload().sub)
  console.log('This the number type ->', typeof getPayload().sub)
  return getPayload().sub
}

export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const splitToken = token.split('.')
  if (splitToken.length !== 3) return false
  return JSON.parse(Buffer.from(splitToken[1], 'base64'))
}

export const isAuthenticated = () => {
  const payload = getPayload()
  if (!payload) return false
  const { exp } = payload
  const now = Math.round(Date.now() / 1000)
  return exp > now
}

export const handleLogout = (navigate) => {
  console.log(tokenName)
  localStorage.removeItem(tokenName)
  navigate('/login')
}

export const isOwner = (token1) => {
  const payload = getPayload()
  if (!payload) return false
  return token1 === payload.sub
}
