import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import { ImageList } from './ImageGallery.styled';     

const ImageGallery = ({ propGallery, onClick }) => (
  <ImageList>
    {propGallery.map(({ webformatURL, tags, largeImageURL }, index) => (
      <ImageGalleryItem
        key={index}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
        onClick={onClick}
      />
    ))}  
  </ImageList>
);
export default ImageGallery;

ImageGallery.propTypes = {
  propGallery: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
}