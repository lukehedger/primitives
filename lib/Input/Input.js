import React from 'react'
import PropTypes from 'prop-types'
import { margin, padding, placeholder, size } from 'polished'
import styled from 'styled-components'

import theme from '../theme'

/**
 * @namespace StyledInput
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledInput = styled.input`
  ${props => margin(...props.margin)};
  ${props => padding(...props.padding)};
  ${props => placeholder(props.placeholderMixin)};
  ${props => size(...props.size)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  border-style: ${({ borderStyle }) => borderStyle};
  border-width: ${({ borderWidth }) => borderWidth};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  outline: none;
`

/**
 * @namespace Input
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Input = ({ children, ...props }) => (
  <StyledInput {...props}>{children}</StyledInput>
)

/**
 * @name defaultProps
 * @memberof Input
 * @desc Primitive's default properties
 */
Input.defaultProps = {
  backgroundColor: theme.none,
  borderColor: theme.primary,
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '2px',
  color: theme.primary,
  display: 'block',
  fontSize: '16px',
  fontWeight: 300,
  margin: ['0'],
  padding: ['8px'],
  placeholderMixin: { color: theme.grey },
  size: ['auto'],
}

/**
 * @name propTypes
 * @memberof Input
 * @desc Primitive's prop type definitions
 */
Input.propTypes = {
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
  /** Display */
  display: PropTypes.string,
  /** Font size */
  fontSize: PropTypes.string,
  /** Font weight */
  fontWeight: PropTypes.number,
  /** [Margin shorthand](https://polished.js.org/docs/#margin) */
  margin: PropTypes.array,
  /** [Padding shorthand](https://polished.js.org/docs/#padding) */
  padding: PropTypes.array,
  /** [Placeholder mixin](https://polished.js.org/docs/#placeholder) */
  placeholderMixin: PropTypes.object,
  /** [Size shorthand](https://polished.js.org/docs/#size) */
  size: PropTypes.array,
}

export default Input
