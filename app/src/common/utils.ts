import { Dimensions, Platform, ScaledSize } from 'react-native'
import { webClientId } from '../../.env.js'

export function isIPhoneXSize(dim: ScaledSize) {
  return dim.height == 812 || dim.width == 812
}
export function isIphoneX() {
  const dim = Dimensions.get('window')

  return Platform.OS === 'ios' && (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
}

export function isIPhoneXrSize(dim: ScaledSize) {
  return dim.height == 896 || dim.width == 896
}

export const HEADER_SIZE = isIphoneX() ? 130 : 100

export const GoogleSignInConfig = {
  webClientId,
  offlineAccess: true,
}
