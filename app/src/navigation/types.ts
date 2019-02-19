import { routes } from '~/navigation'

// eslint-disable-next-line no-unused-vars
import { NavigationState as ReactNavigationState } from 'react-navigation'

export type Route = keyof typeof routes

interface RouteState {
  routeName: Route
  key: string
}

export type NavigationState = {
  key: string
  isTransitionining: boolean
  index: number
  params: any
  routes: RouteState[]
} & ReactNavigationState
