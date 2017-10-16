import React from 'react'
import PropTypes from 'prop-types'
import { margin, padding, size } from 'polished'
import styled from 'styled-components'

import theme from '../theme'

/**
 * @namespace StyledButton
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledButton = styled.button.attrs({
  type: 'button',
})`
  ${props => margin(...props.margin)};
  ${props => padding(...props.padding)};
  ${props => size(...props.size)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  border-style: ${({ borderStyle }) => borderStyle};
  border-width: ${({ borderWidth }) => borderWidth};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  cursor: pointer;
  outline: none;

  &:disabled {
    cursor: auto;
    opacity: 0.5;
  }
`

/**
 * @namespace Button
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
)

/**
 * @name defaultProps
 * @memberof Button
 * @desc Primitive's default properties
 */
Button.defaultProps = {
  backgroundColor: theme.none,
  borderColor: theme.primary,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '2px',
  color: theme.primary,
  margin: ['0'],
  padding: ['8px', '16px'],
  size: ['auto'],
}

/**
 * @name propTypes
 * @memberof Button
 * @desc Primitive's prop type definitions
 */
Button.propTypes = {
  /** Background colour */
  backgroundColor: PropTypes.string,
  /** Border color */
  borderColor: PropTypes.string,
  /** Border style */
  borderStyle: PropTypes.string,
  /** Border width */
  borderWidth: PropTypes.string,
  /** Border radius */
  borderRadius: PropTypes.string,
  /** Colour */
  color: PropTypes.string,
  /** [Margin shorthand](https://polished.js.org/docs/#margin) */
  margin: PropTypes.array,
  /** [Padding shorthand](https://polished.js.org/docs/#padding) */
  padding: PropTypes.array,
  /** [Size shorthand](https://polished.js.org/docs/#size) */
  size: PropTypes.array,
}

export default Button
