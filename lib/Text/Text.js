import React from 'react'
import PropTypes from 'prop-types'
import { margin, padding, size } from 'polished'
import styled from 'styled-components'

import theme from '../theme'

/**
 * @namespace StyledText
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledText = styled.p`
  ${props => margin(...props.margin)};
  ${props => padding(...props.padding)};
  ${props => size(...props.size)};
  color: ${({ color, theme }) => color || theme.primary};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
`

/**
 * @namespace Text
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Text = ({ children, ...props }) => (
  <StyledText {...props}>{children}</StyledText>
)

/**
 * @name defaultProps
 * @memberof Text
 * @desc Primitive's default properties
 */
Text.defaultProps = {
  color: 'peachpuff',
  display: 'block',
  fontSize: '16px',
  fontWeight: 300,
  letterSpacing: '0',
  lineHeight: 'inherit',
  margin: ['0'],
  padding: ['0'],
  size: ['auto'],
  textAlign: 'inherit',
  textTransform: 'none',
  theme,
}

/**
 * @name propTypes
 * @memberof Text
 * @desc Primitive's prop type definitions
 */
Text.propTypes = {
  /** Colour palette alias */
  color: PropTypes.string,
  /** Display */
  display: PropTypes.string,
  /** Font size */
  fontSize: PropTypes.string,
  /** Font weight */
  fontWeight: PropTypes.number,
  /** Letter spacing */
  letterSpacing: PropTypes.string,
  /** Line height */
  lineHeight: PropTypes.string,
  /** [Margin shorthand](https://polished.js.org/docs/#margin) */
  margin: PropTypes.array,
  /** [Padding shorthand](https://polished.js.org/docs/#padding) */
  padding: PropTypes.array,
  /** [Size shorthand](https://polished.js.org/docs/#size) */
  size: PropTypes.array,
  /** Text alignment */
  textAlign: PropTypes.string,
  /** Text transformation */
  textTransform: PropTypes.string,
  /** Theme object */
  theme: PropTypes.object,
}

export default Text
