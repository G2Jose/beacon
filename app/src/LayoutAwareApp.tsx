import React, { Component } from 'react'
import AppWithNavigationState from '~/navigation'
import { View, LayoutChangeEvent } from 'react-native'
import { connect } from 'react-redux'
import { setDimensions } from '~/common/actions'
import { ReduxState } from './store/types'

const mapDispatchToProps = { setDimensions }

const mapStateToProps = (state: ReduxState) => ({
  dimensions: state.common.dimensions,
})

export const DimensionsContext = React.createContext({ width: 0, height: 0 })

type Props = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>

class LayoutAwareApp extends Component<Props> {
  onLayout = (event: LayoutChangeEvent) => this.props.setDimensions(event.nativeEvent.layout)

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this.onLayout}>
        <DimensionsContext.Provider value={this.props.dimensions}>
          <AppWithNavigationState />
        </DimensionsContext.Provider>
      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutAwareApp)
