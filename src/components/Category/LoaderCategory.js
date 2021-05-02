import React from 'react';
import ContentLoader from 'react-content-loader';

const LoaderCategory = (props) => (
  <ContentLoader
    width="100%"
    height={25}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <rect x="5" y="0" rx="3" ry="3" width="60%" height="20" />
  </ContentLoader>
);

export default LoaderCategory;
