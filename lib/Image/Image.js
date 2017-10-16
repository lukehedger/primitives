import React from 'react'
import PropTypes from 'prop-types'
import { margin, padding, size } from 'polished'
import styled from 'styled-components'

/**
 * @namespace StyledImage
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledImage = styled.div`
  ${props => margin(...props.margin)};
  ${props => padding(...props.padding)};
  ${props => size(...props.size)};
  background-image: url(${({ src }) => src});
  background-position: ${({ backgroundPosition }) => backgroundPosition};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  background-size: ${({ backgroundSize }) => backgroundSize};
  border-radius: ${({ borderRadius }) => borderRadius};
`

/**
 * @namespace Image
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Image = ({ children, ...props }) => (
  <StyledImage {...props}>{children}</StyledImage>
)

/**
 * @name defaultProps
 * @memberof Image
 * @desc Primitive's default properties
 */
Image.defaultProps = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto',
  borderRadius: 0,
  margin: ['0'],
  padding: ['0'],
  size: ['100%', 'auto'],
}

/**
 * @name propTypes
 * @memberof Image
 * @desc Primitive's prop type definitions
 */
Image.propTypes = {
  /** Background position */
  backgroundPosition: PropTypes.string,
  /** Background repeat */
  backgroundRepeat: PropTypes.string,
  /** Background size */
  backgroundSize: PropTypes.string,
  /** Border radius */
  borderRadius: PropTypes.string,
  /** [Margin shorthand](https://polished.js.org/docs/#margin) */
  margin: PropTypes.array,
  /** [Padding shorthand](https://polished.js.org/docs/#padding) */
  padding: PropTypes.array,
  /** [Size shorthand](https://polished.js.org/docs/#size) */
  size: PropTypes.array,
}

export default Image
