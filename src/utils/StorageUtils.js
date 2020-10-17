import store from 'store'
import { IUserListItem } from '@/interface/User'
import { IRoleListItem } from '@/interface/Role'

const auth_key = 'user_key'

export function setUser(user) {
  store.set(auth_key, user)
}

export function getUser() {
  return store.get(auth_key) || {}
}

export function removeUser() {
  store.remove(auth_key)
}
