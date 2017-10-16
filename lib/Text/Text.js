import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * @namespace StyledText
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledText = styled.p`
  color: ${({ color }) => color || Text.defaultProps.color};
  display: ${({ display }) => display || Text.defaultProps.display};
  font-size: ${({ fontSize }) => fontSize || Text.defaultProps.fontSize};
  font-weight: ${({ fontWeight }) =>
    fontWeight || Text.defaultProps.fontWeight};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing || Text.defaultProps.letterSpacing};
  line-height: ${({ lineHeight }) =>
    lineHeight || Text.defaultProps.lineHeight};
  text-align: ${({ textAlign }) => textAlign || Text.defaultProps.textAlign};
  text-transform: ${({ textTransform }) =>
    textTransform || Text.defaultProps.textTransform};
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
  textAlign: 'inherit',
  textTransform: 'none',
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
  /** Text alignment */
  textAlign: PropTypes.string,
  /** Text transformation */
  textTransform: PropTypes.string,
}

export default Text
