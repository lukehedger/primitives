import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'polished'
import styled from 'styled-components'

/**
 * @namespace StyledVideo
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledVideo = styled.video.attrs({
  controlsList: 'nodownload',
})`
  ${props => size(...props.size)};
`

/**
 * @namespace Video
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Video = ({ children, ...props }) => (
  <StyledVideo {...props}>{children}</StyledVideo>
)

/**
 * @name defaultProps
 * @memberof Video
 * @desc Primitive's default properties
 */
Video.defaultProps = {
  size: ['auto', '100%'],
}

/**
 * @name propTypes
 * @memberof Video
 * @desc Primitive's prop type definitions
 */
Video.propTypes = {
  /** [Size shorthand](https://polished.js.org/docs/#size) */
  size: PropTypes.array,
}

export default Video
