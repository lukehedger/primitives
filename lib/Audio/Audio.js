import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'polished'
import styled from 'styled-components'

/**
 * @namespace StyledAudio
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledAudio = styled.audio.attrs({
  controlsList: 'nodownload',
})`
  ${props => size(...props.size)};
`

/**
 * @namespace Audio
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Audio = ({ children, ...props }) => (
  <StyledAudio {...props}>{children}</StyledAudio>
)

/**
 * @name defaultProps
 * @memberof Audio
 * @desc Primitive's default properties
 */
Audio.defaultProps = {
  size: ['32px', '100%'],
}

/**
 * @name propTypes
 * @memberof Audio
 * @desc Primitive's prop type definitions
 */
Audio.propTypes = {
  /** [Size shorthand](https://polished.js.org/docs/#size) */
  size: PropTypes.array,
}

export default Audio
