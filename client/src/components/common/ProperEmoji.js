import React from 'react';
// import classnames from 'classnames';
import PropTypes from 'prop-types';

const ProperEmoji = ({ emoji, alt }) => {
  return (
    <span role="img" alt="" aria-label="" air-labelledby={alt}>
      {emoji}
    </span>
  );
};

ProperEmoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default ProperEmoji;
