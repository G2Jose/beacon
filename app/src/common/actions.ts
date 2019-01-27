export const actionTypes = {
  DIMENSIONS_SET: 'DIMENSIONS_SET',
}

export const setDimensions = ({
  height,
  width,
}: {
  height: number
  width: number
}) => ({
  type: actionTypes.DIMENSIONS_SET,
  payload: { height, width },
})
