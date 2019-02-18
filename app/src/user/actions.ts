// eslint-disable-next-line
import { User } from 'react-native-google-signin'

export const actionTypes = {
  USER_SET: 'USER_SET',
}

type SetUserParams = User
export const setUser = (payload: SetUserParams) => {
  const {
    accessToken,
    accessTokenExpirationDate,
    serverAuthCode,
    idToken,
  } = payload
  const user = {
    ...payload.user,
    accessToken,
    accessTokenExpirationDate,
    serverAuthCode,
    idToken,
  }
  return {
    type: actionTypes.USER_SET,
    payload: user,
  }
}
