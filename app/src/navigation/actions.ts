import {
  NavigationActions,
  // eslint-disable-next-line no-unused-vars
  NavigationNavigateActionPayload,
} from 'react-navigation'

export type RouteParams = Pick<
  NavigationNavigateActionPayload,
  Exclude<keyof NavigationNavigateActionPayload, 'routeName'>
>

export const routeTo = (route: string, params?: RouteParams) => NavigationActions.navigate({ routeName: route, ...params })
