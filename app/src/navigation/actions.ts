import {
  NavigationActions,
  // eslint-disable-next-line no-unused-vars
  NavigationNavigateActionPayload,
} from 'react-navigation'
import { Route } from '~/navigation/types'

export type RouteParams = Pick<
  NavigationNavigateActionPayload,
  Exclude<keyof NavigationNavigateActionPayload, 'routeName'>
>

export const routeTo = (route: Route, params: RouteParams) => NavigationActions.navigate({ routeName: route, ...params })
