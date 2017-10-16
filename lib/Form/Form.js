import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * @namespace StyledForm
 * @desc styled-component 💅
 * @return {Function} React component
 */
const StyledForm = styled.form.attrs({
  action: '',
})``

/**
 * @namespace Form
 * @desc Primitive component
 * @param {Object} props - Component props
 * @param {Object} props.children - Child components
 * @return {Function} React component
 */
const Form = ({ children, ...props }) => (
  <StyledForm {...props}>{children}</StyledForm>
)

/**
 * @name defaultProps
 * @memberof Form
 * @desc Primitive's default properties
 */
Form.defaultProps = {}

/**
 * @name propTypes
 * @memberof Form
 * @desc Primitive's prop type definitions
 */
Form.propTypes = {
  /** Comment like this */
}

export default Form
