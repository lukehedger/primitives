import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../theme'

/**
 * @namespace StyledLabel
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledLabel = styled.label`
  color: ${({ color, theme }) => color || theme.primary};
`

/**
 * @namespace Label
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Label = ({ children, ...props }) => (
  <StyledLabel {...props}>{children}</StyledLabel>
)

/**
 * @name defaultProps
 * @memberof Label
 * @desc Primitive's default properties
 */
Label.defaultProps = {
  color: theme.primary,
  theme,
}

/**
 * @name propTypes
 * @memberof Label
 * @desc Primitive's prop type definitions
 */
Label.propTypes = {
  /** Colour palette alias */
  color: PropTypes.string,
  /** Theme object */
  theme: PropTypes.object,
}

export default Label
