import React from "react";
import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const Button = ({ buttonProp }) => (
  <>
    <ButtonLoad type="submit" onClick={buttonProp}>Load more</ButtonLoad>
  </>
  
);

export default Button;

Button.propTypes = {
  buttonProp: PropTypes.func.isRequired,
};