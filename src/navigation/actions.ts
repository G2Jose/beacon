import { NavigationActions } from 'react-navigation'
import { Route } from '~/navigation/types'

export const routeTo = (route: Route) => NavigationActions.navigate(route as any)
