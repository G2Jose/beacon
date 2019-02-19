import {
  NavigationActions,
  // eslint-disable-next-line no-unused-vars
  NavigationNavigateActionPayload,
  NavigationNavigateAction,
} from 'react-navigation'
import { Route } from './types'

export type RouteParams = Pick<
  NavigationNavigateActionPayload,
  Exclude<keyof NavigationNavigateActionPayload, 'routeName'>
>

type RouteTo = (
  routeName: Route,
  params?: RouteParams
) => NavigationNavigateAction
const _routeTo = (routeName: Route, params?: RouteParams) => NavigationActions.navigate({ routeName, ...params })

const routeTo = _routeTo as RouteTo

export { routeTo }
