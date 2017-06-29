import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * @namespace StyledGridCell
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledGridCell = styled.div`
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
`

/**
 * @namespace GridCell
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const GridCell = ({ children, ...props }) =>
  <StyledGridCell {...props}>{children}</StyledGridCell>

/**
 * @name defaultProps
 * @memberof GridCell
 * @desc Primitive's default properties
 */
GridCell.defaultProps = {
  column: 1,
  row: 1,
}

/**
 * @name propTypes
 * @memberof GridCell
 * @desc Primitive's prop type definitions
 */
GridCell.propTypes = {
  /** Grid column */
  column: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Grid row */
  row: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GridCell
