import PropTypes from 'prop-types';

export function Gallery({ galleryImg }) {
  return (
    <ul>
      {galleryImg.map(image => {
        return (
          <li key={image.id}>
            <img src={image.img} alt={image.label} />
            <p>{image.label}</p>
          </li>
        );
      })}
    </ul>
  );
}

Gallery.propTypes = {
  galleryImg: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
};
