import React from 'react'
import PropTypes from 'prop-types'
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
  display: flex;
  flex: ${({ flex }) => flex || Box.defaultProps.flex};
  flex-wrap: ${({ flexWrap }) => flexWrap || Box.defaultProps.flexWrap};

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
  flex: 1,
  flexWrap: 'wrap',
}

/**
 * @name propTypes
 * @memberof Box
 * @desc Primitive's prop type definitions
 */
Box.propTypes = {
  /** Alignment */
  align: PropTypes.oneOf(Object.keys(ALIGN)),
  /** Flex */
  flex: PropTypes.number,
  /** Flex wrap */
  flexWrap: PropTypes.string,
}

export default Box
