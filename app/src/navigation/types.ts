import { routes } from '~/navigation'

export type Route = keyof typeof routes

interface RouteState {
  routeName: Route
  key: string
}

export interface NavigationState {
  key: string
  isTransitionining: boolean
  index: number
  routes: RouteState[]
}
