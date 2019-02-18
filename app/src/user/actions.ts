// eslint-disable-next-line

import { camelCase, mapKeys } from 'lodash'

export const actionTypes = {
  USER_SET: 'USER_SET',
}

type UserPayload = {
  id: string
  email: string
  image: string
  name: string
  oauth_token: string
  oauth_expires_at: string
  provider: string
  uid: string
}
export const setUser = (payload: UserPayload) => {
  const user = mapKeys(payload, (v, k) => camelCase(k))

  return {
    type: actionTypes.USER_SET,
    payload: user,
  }
}
