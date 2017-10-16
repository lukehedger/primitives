import React from 'react'
import PropTypes from 'prop-types'
import { margin, padding, size } from 'polished'
import styled from 'styled-components'

const ALIGN = {
  top: 'align-items: flex-start',
  middle: 'align-items: center',
  bottom: 'align-items: flex-end',
  left: 'justify-content: flex-start',
  center: 'justify-content: center',
  right: ' justify-content: flex-end',
}

/**
 * @namespace StyledBox
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledBox = styled.div`
  ${props => margin(...props.margin)};
  ${props => padding(...props.padding)};
  ${props => size(...props.size)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  ${({ align }) => align && ALIGN[align]};
`

/**
 * @namespace Box
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Box = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
)

/**
 * @name defaultProps
 * @memberof Box
 * @desc Primitive's default properties
 */
Box.defaultProps = {
  backgroundColor: 'transparent',
  flex: 1,
  flexWrap: 'wrap',
  margin: ['0'],
  padding: ['0'],
  size: ['auto'],
}

/**
 * @name propTypes
 * @memberof Box
 * @desc Primitive's prop type definitions
 */
Box.propTypes = {
  /** Alignment */
  align: PropTypes.oneOf(Object.keys(ALIGN)),
  /** Background color */
  backgroundColor: PropTypes.string,
  /** Flex */
  flex: PropTypes.number,
  /** Flex wrap */
  flexWrap: PropTypes.string,
  /** Margin shorthand [top, right, bottom, left] */
  margin: PropTypes.array,
  /** Padding shorthand [top, right, bottom, left] */
  padding: PropTypes.array,
  /** Size shorthand [height, width] */
  size: PropTypes.array,
}

export default Box
