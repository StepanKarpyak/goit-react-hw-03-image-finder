import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import IconButton from '../IconButton/IconButton';
import { FcSearch } from "react-icons/fc";
import {Header, SearchForm, Input} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputFormValue: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({
      inputFormValue: value.toLowerCase(),
    });
  }

  handleSubmit = e => {
    const { inputFormValue } = this.state;
    e.preventDefault();

    if (inputFormValue.trim() === '') {
      toast.error('Please, fill in the field of search');
      return;
    }
    this.props.onSubmit(inputFormValue);

    this.setState({
      inputFormValue: '',
    });
  }

  render() {
    const { inputFormValue } = this.state;

    return (
      <>
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
            <IconButton aria-label="search">
              <FcSearch size="70%"/>
            {/* <span class="button-label">Search</span> */}
          </IconButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputFormValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
      </>

    )
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};