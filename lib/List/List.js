import React from 'react'
import PropTypes from 'prop-types'
import { margin, padding } from 'polished'
import styled from 'styled-components'

/**
 * @namespace StyledList
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledList = styled.ul`
  ${props => margin(...props.margin)};
  ${props => padding(...props.padding)};
  list-style-type: none;
`

/**
 * @namespace ListItem
 * @desc Primitive styled-component 💅
 * @return {Function} React component
 */
const ListItem = styled.li``

/**
 * @namespace List
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const List = ({ children, ...props }) => (
  <StyledList {...props}>
    {React.Children.map(children, c => <ListItem {...props}>{c}</ListItem>)}
  </StyledList>
)

/**
 * @name defaultProps
 * @memberof List
 * @desc Primitive's default properties
 */
List.defaultProps = {
  margin: ['0'],
  padding: ['0'],
}

/**
 * @name propTypes
 * @memberof List
 * @desc Primitive's prop type definitions
 */
List.propTypes = {
  /** [Margin shorthand](https://polished.js.org/docs/#margin) */
  margin: PropTypes.array,
  /** [Padding shorthand](https://polished.js.org/docs/#padding) */
  padding: PropTypes.array,
}

export default List
